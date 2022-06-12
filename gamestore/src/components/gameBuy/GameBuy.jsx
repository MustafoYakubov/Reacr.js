import { Button } from "../button/Button";
import "./gameBuy.scss";

const GameBuy = ({ game = null }) => {
  return (
    <div className="gameBuy">
      <span className="gameBuy_price">{game.price}$ </span>
      <Button size="s" type="primary">
        В Корзину
      </Button>
    </div>
  );
};

export { GameBuy };
