import { useDispatch } from "react-redux";
import { setItemInCart } from "../../redux/cart/reducer";
import { Button } from "../button/Button";
import "./gameBuy.scss";

const GameBuy = ({ game = null }) => {
  const dispatch = useDispatch();
  const handeClick = (e) => {
    e.stopPropagation();
    dispatch(setItemInCart(game));
  };
  return (
    <div className="gameBuy">
      <span className="gameBuy_price">{game.price}$ </span>
      <Button onClick={handeClick} size="s" type="primary">
        В Корзину
      </Button>
    </div>
  );
};

export { GameBuy };
