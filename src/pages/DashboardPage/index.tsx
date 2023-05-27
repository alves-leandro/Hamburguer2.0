import { useContext } from "react";
// import { CartShopList } from "../../components/CartShopList";
import { Header } from "../../components/Header";
import { ProductsList } from "../../components/ProductsList";
import { CartContext } from "../../contexts/CartContext";

export const DashboardPage = () => {
  const {
    theme,
    shopCart,
    search,
    handleSearch,
    switchTheme,
    handleAddProduct,
    filteredProducts,
    // handleRemoveProduct,
    // handleRemoveAll,
  } = useContext(CartContext);

  return (
    <div>
      <div className="App" data-theme={theme}>
        <Header
          countShop={shopCart.length}
          search={search}
          handleSearch={handleSearch}
          theme={theme}
          switchTheme={switchTheme}
        />

        <div className="mainDiv">
          <section className="leftSection">
            <ProductsList
              handleAddProduct={handleAddProduct}
              filteredProducts={filteredProducts}
              search={search}
            />
          </section>

          {/* <aside className="rightSection">
            <CartShopList
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
              handleRemoveAll={handleRemoveAll}
              shopCart={shopCart}
            />
          </aside> */}
        </div>
      </div>
    </div>
  );
};
