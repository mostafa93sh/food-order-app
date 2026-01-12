import React, { useContext } from "react";
import Modal from "./UI/Modal";
import { CartContext } from "../store/CartContext";
import Input from "./UI/Input";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import useHttp from "../hooks/useHttp";
import Error from "./UI/Error";

const requestConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

function Checkout() {
  const cartCtx = useContext(CartContext);
  const UserProgressCtx = useContext(UserProgressContext);
  const {
    data,
    isLoading: isSending,
    error,
    sendRequest,
    clearData,
  } = useHttp("http://localhost:3000/orders", requestConfig);

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

    sendRequest(
      JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: customerData,
        },
      })
    );
  }

  function handleFinish() {
    clearData();
    cartCtx.clearCart();
    UserProgressCtx.hideCheckout();
  }

  let actionsElements = (
    <>
      <Button type="button" textOnly onClick={handleCancel}>
        Cancel
      </Button>
      <Button>Confirm</Button>
    </>
  );
  if (isSending) {
    actionsElements = (
      <Error title={`failed to submit your order`} message={error} />
    );
  }
  if (data && !error) {
    return (
      <Modal
        isOpen={UserProgressCtx.progress === "checkout"}
        onClose={handleFinish}
      >
        <h2>Success !</h2>
        <p>Your order was submitted successfully</p>
        <p>we will get back to with more detail </p>
        <div className="modal-actions">
          <Button onClick={handleFinish}>Ok</Button>
        </div>
      </Modal>
    );
  }

  return (
    <Modal isOpen={UserProgressCtx.progress === "checkout"}>
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p className="cart-total">Total Amount: ${cartTotal}</p>
        <Input id="name" label="Full Name" type="text" />
        <Input id="email" label="Email Address" type="email" />
        <Input id="street" label="Street" type="text" />
        <div className="control-row">
          <Input id="city" label="City" type="text" />
          <Input id="postal-code" label="Postal Code" type="text" />
        </div>

        <p className="modal-actions">{actionsElements}</p>
      </form>
    </Modal>
  );
}

export default Checkout;
