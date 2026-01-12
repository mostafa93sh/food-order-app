import React, { useContext } from "react";
import Modal from "./UI/Modal";
import { CartContext } from "../store/CartContext";
import Input from "./UI/Input";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";

function Checkout() {
  const cartCtx = useContext(CartContext);
  const UserProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  function handleCancel() {
    UserProgressCtx.hideCheckout();
  }

  function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries());
  }

  return (
    <Modal isOpen={UserProgressCtx.progress === "checkout"}>
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p className="cart-total">Total Amount: ${cartTotal}</p>
        <Input id="Full-Name" label="Full Name" type="text" />
        <Input id="email" label="Email Address" type="email" />
        <Input id="Street" label="Street" type="text" />
        <div className="control-row">
          <Input id="City" label="City" type="text" />
          <Input id="Postal-Code" label="Postal Code" type="text" />
        </div>
        <p className="modal-actions">
          <Button type="button" textOnly onClick={handleCancel}>
            Cancel
          </Button>
          <Button>Confirm</Button>
        </p>
      </form>
    </Modal>
  );
}

export default Checkout;
