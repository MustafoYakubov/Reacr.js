import React from "react";
import "./cartItem.scss";

export const CartItem = ({ title, price, id }) => {
  return (
    <div className="cartItem">
      <span> {title}</span>
      <div className="cartItemPrice">
        <span>{price} руб.</span>
      </div>
    </div>
  );
};
