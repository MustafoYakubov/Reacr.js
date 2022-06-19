import { calcTotalPrice } from "../utils";
import { Button } from "../button/Button";
import "./cartMenu.scss";
export const CartMenu = ({ items, onClick = null }) => {
  return (
    <div className="cartMenu">
      <div className="cartMenuGamesList">{items.map((game) => game.title)}</div>
      {items.length > 0 ? (
        <div className="cartMenuArrange">
          <div className="cartMenuTotalPrice">
            <span>Итого :</span>
            <span> {calcTotalPrice(items)} руб.</span>
            <Button type="primary" size="m" onClick={onClick}>
              Оформить заказ
            </Button>
          </div>
        </div>
      ) : (
        "Корзина Пусто"
      )}
    </div>
  );
};
