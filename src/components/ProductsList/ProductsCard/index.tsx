import { StyledButton } from "../../../styles/Button";
import { currencyFormat } from "../../../styles/CurrencyFormat";
import { Card } from "./styles";
import { Product } from "../../../types/product";

interface iProductsCardProps {
  product: Product;
  wenAddProduct: (product: Product) => void;
}

export const ProductsCard = ({
  product,
  wenAddProduct,
}: iProductsCardProps) => {
  return (
    <Card>
      <div className="card">
        <div className="productCardImage">
          <img src={product.img} alt={product.name} />
        </div>

        <div className="divAboutCardProduct">
          <p className="productCardName">{product.name}</p>
          <p className="productCardCategory">{product.category}</p>
          <p className="productCardPrice">{currencyFormat(product.price)}</p>
          <StyledButton
            buttonSize="default"
            buttonStyle="card"
            onClick={() => wenAddProduct(product)}
          >
            Adicionar
          </StyledButton>
        </div>
      </div>
    </Card>
  );
};
