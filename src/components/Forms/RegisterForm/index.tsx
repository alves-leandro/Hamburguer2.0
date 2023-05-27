import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../../../styles/Input";

import { registerSchema } from "./formSchema";
import { FormRegisterStyled } from "./style";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { StyledButton } from "../../../styles/Button";
import { Link } from "react-router-dom";

interface iUserRegisterFormValues {
  name: string;
  email: string;
  password: string;
  checkPassword: string;
}

export const RegisterForm = () => {
  const { loading, userRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iUserRegisterFormValues>({
    mode: "onChange",
    resolver: yupResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<iUserRegisterFormValues> = (data) => {
    userRegister(data);
    reset();
  };

  return (
    <FormRegisterStyled onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="headerRegisterForm">
        <h1>Cadastro</h1>
        <Link to="/login">Retornar para o login</Link>
      </div>

      <Input
        className="input"
        label="Nome"
        id="name"
        type="text"
        placeholder=""
        register={register("name")}
        disabled={loading}
      />
      <span>{errors.name?.message}</span>

      <Input
        className="input"
        label="Email"
        id="email"
        type="email"
        placeholder=""
        register={register("email")}
        disabled={loading}
      />
      <span>{errors.email?.message}</span>

      <Input
        className="input"
        label="Senha"
        id="password"
        type="password"
        placeholder=""
        register={register("password")}
        disabled={loading}
      />
      <span>{errors.password?.message}</span>

      <Input
        className="input"
        label="Confirmar Senha"
        type="password"
        placeholder=""
        register={register("checkPassword")}
        disabled={loading}
      />
      <span>{errors.checkPassword?.message}</span>

      <StyledButton
        buttonSize="default"
        buttonStyle="disabled"
        type="submit"
        disabled={loading}
      >
        {loading ? "Cadastrando ..." : "Cadastrar"}
      </StyledButton>
    </FormRegisterStyled>
  );
};
