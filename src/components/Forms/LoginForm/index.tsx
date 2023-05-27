import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../../../styles/Input";

import { loginSchema } from "./formSchema";
import { FormLoginStyled } from "./style";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { StyledButton } from "../../../styles/Button";
import { LinkStyled } from "../../../styles/Link";

interface iUserLoginFormValues {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const { userLogin, loading, showPassword, setShowPassword } =
    useContext(UserContext);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iUserLoginFormValues>({
    mode: "onChange",
    resolver: yupResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<iUserLoginFormValues> = (data) => {
    userLogin(data);
    reset();
  };

  return (
    <FormLoginStyled onSubmit={handleSubmit(onSubmit)} noValidate>
      <h1 className="FormTitle">Login</h1>

      <Input
        className="input"
        label="Email"
        type="email"
        placeholder=""
        register={register("email")}
        disabled={loading}
      />
      {errors ? <span>{errors.email?.message}</span> : ""}

      <div className="passwordDiv">
        <Input
          className="input"
          label="Senha"
          type={showPassword ? "text" : "password"}
          placeholder=""
          register={register("password")}
          disabled={loading}
        />
        <button type="button" onClick={toggleShowPassword} className="iconEye">
          {!showPassword ? <FaEye /> : <FaEyeSlash />}
        </button>
      </div>
      <span>{errors.password?.message}</span>

      <StyledButton
        buttonSize="default"
        buttonStyle="primary"
        type="submit"
        disabled={loading}
      >
        {loading ? "Entrando ..." : "Entrar"}
      </StyledButton>
      <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>

      <LinkStyled linksize="default" linkstyle="disabled" to={"/register"}>
        Cadastrar
      </LinkStyled>
    </FormLoginStyled>
  );
};
