import { LoginForm } from "../../components/Forms/LoginForm";
import { LoginMainDivStyled } from "./style";
import { RiShoppingBag3Fill } from "react-icons/ri";

export const LoginPage = () => {
  return (
    <LoginMainDivStyled className="mainDivLogin">
      <section className="leftSection">
        <LoginForm />
      </section>

      <section className="rightSections">
        <div className="logo">
          <h1 className="logoLeft">
            Burguer <span className="logoRight">Kenzie</span>
          </h1>
        </div>
        <div className="messageLoginContainer">
          <div className="shoppingBarContainer">
            <RiShoppingBag3Fill className="bagIMG" />
          </div>
          <div>
            <p className="textLoginMessage">
              A vida é como um sanduíche, é preciso recheá-la com os melhores
              ingredientes.
            </p>
          </div>
        </div>
        <div className="dotsContainer">
          <img src={require("../../assets/dots.png")} alt="dots" />
        </div>
      </section>
    </LoginMainDivStyled>
  );
};
