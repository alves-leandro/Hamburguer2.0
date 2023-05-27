import { useContext, useState } from "react";
import { HeaderContainer } from "./styles";
import { SearchProducts } from "../SearchProducts";
import ReactSwitch from "react-switch";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { CartShopModal } from "../Modals";
import { CartContext } from "../../contexts/CartContext";

interface iHeaderProps {
  search: string;
  handleSearch: (element: React.ChangeEvent<HTMLInputElement>) => void;
  theme?: string;
  switchTheme: () => void;
  countShop: number;
}

export const Header = ({
  countShop,
  search,
  handleSearch,
  theme,
  switchTheme,
}: iHeaderProps) => {
  const navigate = useNavigate();
  const { setModal } = useContext(CartContext);

  const logOut = () => {
    localStorage.clear();
    navigate("/login");
  };

  const [searchIcon, setSearchIcon] = useState(false);

  const handleSearchIcon = () => {
    setSearchIcon((prevState) => !prevState);
  };

  return (
    <HeaderContainer>
      <div className="headerTitle">
        <div className="divHeaderLogo">
          <div className="logo">
            <h1 className="logoLeft">
              Burguer<span className="logoRight">Kenzie</span>
            </h1>
          </div>
          {/* <div className="themeButton">
            <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
            <ReactSwitch onChange={switchTheme} checked={theme === "dark"} />
          </div> */}
        </div>

        <div className="shopAndSearch">
          {searchIcon ? (
            <SearchProducts search={search} handleSearch={handleSearch} />
          ) : null}

          <div className="icons">
            <div className="divSearchIcon">
              <FaSearch onClick={handleSearchIcon} className="searchIcon" />
            </div>
            <div className="divCartIcon">
              <CartShopModal />
              <FaShoppingCart
                onClick={() => setModal(true)}
                className="cartIcon"
              />
              {/* {" "} */}
              <div className="divPositionNumberCart">
                <span className="countCart">
                  {countShop ? (
                    <div className="countCart">{countShop}</div>
                  ) : null}
                </span>
              </div>
            </div>
            <div className="divLogoutIcon">
              <FiLogOut className="logOutIcon" onClick={logOut} />
            </div>
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
};
