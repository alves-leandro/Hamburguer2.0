import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { Product } from "../../types/product";
import { User } from "../../types/user";

interface iUserProviderProps {
  children: React.ReactNode;
}

interface iUserContext {
  user: User | null;
  products: Product[];
  loading: boolean;
  showPassword: false | true;
  setShowPassword: (showPassword: boolean) => void;
  userLogin: (data: iUserLoginProps) => Promise<void>;
  userRegister: (data: iUserRegisterProps) => Promise<void>;
  loadUser: () => void;
}

interface iUserRegisterProps {
    name: string;
    email: string;
    password: string;
}

interface iUserLoginProps {
    email: string;
    password: string;
}

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  
  
  async function loadUser() {
    const accessToken = localStorage.getItem("@TOKEN");
    
    if (!accessToken) {
      setLoading(false);
      return;
    }
    
    try {
      const idUser = window.localStorage.getItem("@userID");

      api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
      const { data } = await api.get(`/users/${idUser}`);

      setUser(data);

    } catch (error) {
      console.error(error);
      window.localStorage.clear();
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadUser();
  }, []);

  const userRegister = async (data: iUserRegisterProps) => {
    try {
      setLoading(true);
      const response = await api.post("/users", data);

      toast.success("Registro feito com sucesso!");

      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      toast.error("O email já existe no banco de dados");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const userLogin = async (data: iUserLoginProps) => {
    try {
      setLoading(true);
      const response = await api.post("/login", data);

      const { accessToken, user: userResponse } = response.data;

      setUser(userResponse);

      window.localStorage.setItem("@TOKEN", accessToken);
      window.localStorage.setItem("@userID", response.data.user.id);

      api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

      toast.success("Login feito com sucesso!");

      const toNavigate = location.state?.from?.pathname || "/dashboard";

      setTimeout(() => {
        navigate(toNavigate, { replace: true });
      }, 3000);
    } catch (error) {
      toast.error("Verifique novamente seu email e senha ...");
      // console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        products,
        loading,
        loadUser,
        userRegister,
        userLogin,
        showPassword,
        setShowPassword,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
