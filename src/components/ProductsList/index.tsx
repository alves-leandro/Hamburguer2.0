import { List } from "./styles";
import { ProductsCard } from "./ProductsCard";
import { Product } from "../../types/product";

interface iProductsListProps {
  search: string;
  filteredProducts: Product[];
  handleAddProduct: (product: Product) => void;
}

export const ProductsList = ({
  filteredProducts,
  handleAddProduct,
  search,
}: iProductsListProps) => {
  return (
    <>
      {search.length !== 0 && (
        <div className="divHiddenSearch">
          <p>Resultados para:</p>
          <span>{search}</span>
        </div>
      )}

      <List>
        {filteredProducts.map((product: Product) => (
          <ProductsCard
            key={product.id}
            product={product}
            wenAddProduct={handleAddProduct}
          />
        ))}
      </List>
    </>
  );
};
