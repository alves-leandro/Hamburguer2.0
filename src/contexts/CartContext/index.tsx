import { AxiosError } from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";
import { getProducts } from "../../services/getProducts";

import { Product } from "../../types/product";
import { UserContext } from "../UserContext";

interface iCartProviderProps {
  children: React.ReactNode;
}

interface iCartContext {
  theme?: string;
  switchTheme: () => void;
  search: string;
  shopCart: Product[];
  handleSearch: (element: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddProduct: (product: Product) => void;
  handleRemoveProduct: (product: Product) => void;
  handleRemoveAll: () => void;
  filteredProducts: Product[];
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CartContext = createContext({} as iCartContext);

export const CartProvider = ({ children }: iCartProviderProps) => {
  const [modal, setModal] = useState(false);
  const [products, setProducts] = useState([] as Product[]);
  const [search, setSearch] = useState("");
  const [shopCart, setShopCart] = useState([] as Product[]);

  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [theme, setTheme] = useLocalStorage("theme", defaultDark ? "light" : "dark");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    const onSuccess = (data: Product[]) => {
      setProducts(data);
    };

    const onFailure = (error: AxiosError) => {
      console.log(error.message);
    };

    getProducts({ onSuccess, onFailure });
  }, []);

  const handleAddProduct = (product: Product) => {
    const exist: Product | undefined = shopCart.find(
      (element: Product) => element.id === product.id
    );
    if (exist) {
      setShopCart(
        shopCart.map((element: Product) =>
          element.id === product.id
            ? { ...exist, quantity: exist.quantity! + 1 }
            : element
        )
      );
    } else {
      setShopCart([...shopCart, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveProduct = (product: Product) => {
    const exist = shopCart.find(
      (element: Product) => element.id === product.id
    ) as Product;
    if (exist.quantity === 1) {
      setShopCart(
        shopCart.filter((element: Product) => element.id !== product.id)
      );
    } else {
      setShopCart(
        shopCart.map((element) =>
          element.id === product.id
            ? { ...exist, quantity: exist.quantity! - 1 }
            : element
        )
      );
    }
  };

  const handleRemoveAll = () => {
    setShopCart([]);
  };

  const filteredProducts = !search
    ? products
    : products.filter(
        (product: Product) =>
          product.name.toLowerCase().includes(search.toLowerCase()) ||
          product.category.toLowerCase().includes(search.toLowerCase())
      );

  const handleSearch = (element: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(element.target.value);
  };

  return (
    <CartContext.Provider
      value={{
        theme,
        switchTheme,
        shopCart,
        search,
        handleSearch,
        handleAddProduct,
        filteredProducts,
        handleRemoveProduct,
        handleRemoveAll,
        modal,
        setModal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
