import { useContext } from "react";
import Modal from "react-modal";
import { CartContext } from "../../contexts/CartContext";
import { CartShopList } from "../CartShopList";

Modal.setAppElement("#root");

export const CartShopModal = () => {
  const {
    modal,
    setModal,
    handleAddProduct,
    handleRemoveProduct,
    handleRemoveAll,
    shopCart,
  } = useContext(CartContext);

  return (
    <Modal
      isOpen={modal}
      onRequestClose={() => setModal(false)}
      contentLabel="Cart Modal"
      overlayClassName="modalOverlay"
      className="modalContent"
    >
      <div className="modalTitle">
        <h1 className="FormTitle">Carrinho de Compras</h1>
        <button className="ButtonCloseModal" onClick={() => setModal(false)}>
          X
        </button>
      </div>
      <CartShopList
        handleAddProduct={handleAddProduct}
        handleRemoveProduct={handleRemoveProduct}
        handleRemoveAll={handleRemoveAll}
        shopCart={shopCart}
      />
    </Modal>
  );
};
