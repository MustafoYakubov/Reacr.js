import { BiCartAlt } from "react-icons/bi";
import { useSelector } from "react-redux";
import "./cartBlog.scss";

export const CartBlog = () => {
  const items = useSelector((state) => state.cart.itemInCart);
  const totalPrice = items.reduce((acc, game) => (acc += game.price), 0);
  const logic = totalPrice !== "" ? totalPrice : null;
  console.log(logic);
  return (
    <div className="cardBlock">
      <BiCartAlt size={35} className="cartBlock_icon" />
      <span className="cartBlock_price">
        {totalPrice !== "" ? totalPrice : ""}
      </span>
    </div>
  );
};
