import { StyledButton } from "../../styles/Button";
import { currencyFormat } from "../../styles/CurrencyFormat";
import { CartShopStyledMainDiv } from "./styles";
import { Product } from "../../types/product";

interface iCartShopListProps {
  shopCart: Product[];
  handleAddProduct: (product: Product) => void;
  handleRemoveProduct: (product: Product) => void;
  handleRemoveAll: () => void;
}

export const CartShopList = ({
  shopCart,
  handleAddProduct,
  handleRemoveProduct,
  handleRemoveAll,
}: iCartShopListProps) => {
  const priceTotal = shopCart.reduce(
    (acc, current: Product) => acc + current.price * current.quantity!,
    0
  );

  return (
    <CartShopStyledMainDiv className="cartShopListMainDiv">
      <ul className="shopCartUl">
        <div>
          {shopCart.length === 0 && (
            <div className="shopCartEmpty">
              <p className="shopTitleEmpty">Sua sacola está vazia</p>
              <p className="shopTextEmpty">Adicione itens</p>
            </div>
          )}
        </div>
        {shopCart.map((product: Product) => (
          <div className="liShopCart" key={product.id}>
            <img src={product.img} alt="" />
            <div className="liShopCartDiv2">
              <div className="liShopAboutDiv">
                <p className="shopProductName">{product.name}</p>
                <p className="shopProductCategory">{product.category}</p>
              </div>
              <div className="liShopButtonDiv">
                <div className="liShopButtonPosition">
                  <StyledButton
                    buttonSize="small"
                    buttonStyle="primary"
                    onClick={() => handleAddProduct(product)}>
                    +
                  </StyledButton>
                  <StyledButton
                    buttonSize="small"
                    buttonStyle="primary-negative"
                    onClick={() => handleRemoveProduct(product)}>
                    -
                  </StyledButton>
                </div>
                <div>
                  <p>
                    {product.quantity} x {currencyFormat(product.price)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </ul>
      {shopCart.length !== 0 && (
        <div className="shopCartTotalDiv">
          <div className="textTotal">
            <p className="pTotal">Total</p>
            <p className="pTotalPrice">{currencyFormat(priceTotal)}</p>
          </div>
          <StyledButton
            buttonSize="default"
            buttonStyle="disabled"
            className="buttonRemoveShopCart"
            onClick={handleRemoveAll}
          >
            Remover Todos
          </StyledButton>
        </div>
      )}
    </CartShopStyledMainDiv>
  );
};
