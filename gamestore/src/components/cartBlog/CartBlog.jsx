import React, { useState } from "react";
import { BiCartAlt } from "react-icons/bi";
import { useSelector } from "react-redux";
import { CartMenu } from "../cartMenu/CartMenu";
import { calcTotalPrice } from "../utils";
import "./cartBlog.scss";

export const CartBlog = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const items = useSelector((state) => state.cart.itemInCart);
  const totalPrice = calcTotalPrice(items);
  return (
    <div className="cardBlock">
      <BiCartAlt
        size={35}
        className="cartBlock_icon"
        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
      />
      <span className="cartBlock_price">
        {totalPrice !== 0 ? totalPrice : "Корзина"}
        {isCartMenuVisible && <CartMenu items={items} />}
      </span>
    </div>
  );
};
