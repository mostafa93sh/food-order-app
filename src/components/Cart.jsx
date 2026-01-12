import React, { useContext } from "react";
import Modal from "./UI/Modal";
import { CartContext } from "../store/CartContext";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import CartItem from "./CartItem";

function Cart() {
  const cartCtx = useContext(CartContext);
  const progressCtx = useContext(UserProgressContext);
  const totalItemsPrice = cartCtx.items.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  return (
    <Modal
      isOpen={progressCtx.progress === "cart"}
      className="cart"
      onClose={progressCtx.progress === "cart" ? progressCtx.hideCart : null} // Allow closing only when cart is open
    >
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onIncrease={() => cartCtx.addItem(item)}
            onDecrease={() => cartCtx.removeItem(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">Total Amount: ${totalItemsPrice.toFixed(2)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={progressCtx.hideCart}>
          Close
        </Button>
        {cartCtx.items.length > 0 && (
          <Button onClick={progressCtx.showCheckout}>Go to checkout</Button>
        )}
      </p>
    </Modal>
  );
}

export default Cart;
