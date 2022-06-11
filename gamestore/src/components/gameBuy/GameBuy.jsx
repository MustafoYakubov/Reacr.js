import React from "react";

export const GameBuy = ({ game = null }) => {
  return (
    <div className="gameBuy">
      <span className="gameBuy_price">{game.price}$ </span>
    </div>
  );
};
  