import React from "react";
import { useSelector } from "react-redux";
import { OrderItem } from "../orderItem/OrderItem";
import { calcTotalPrice } from "../utils";
import "./orderPage.scss";
export const OrderPage = () => {
  const items = useSelector((state) => state.cart.itemInCart);
  if (items.length < 0) {
    return <h1>Ваша Корзина Пусто</h1>;
  }
  console.log(items.title);
  return (
    <div className="orderPage">
      <div className="orderPageLeft">
        {items.map((game, index) => (
          <OrderItem game={game} key={index} />
        ))}
      </div>
      <div className="orderPageRight">
        <div className="orderPageTotalPrice">
          <span>
            {items.length} товаров на сумму {calcTotalPrice(items)} руб.
          </span>
        </div>
      </div>
    </div>
  );
};
