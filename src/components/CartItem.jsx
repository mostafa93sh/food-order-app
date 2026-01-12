import React from "react";

function CartItem({ name, quantity, price, onIncrease, onDecrease }) {
  return (
    <li className="cart-item">
      <p>
        {name} - {quantity} x ${price}
      </p>
      <p className="cart-item-actions">
        <button onClick={onIncrease}>+</button>
        <span>{quantity}</span>
        <button onClick={onDecrease}>-</button>
      </p>
    </li>
  );
}

export default CartItem;
