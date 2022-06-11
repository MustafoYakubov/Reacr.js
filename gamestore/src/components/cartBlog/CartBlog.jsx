import { BiCartAlt } from "react-icons/bi";
import "./cartBlog.scss";

export const CartBlog = () => {
  return (
    <div className="cardBlock">
      <BiCartAlt size={35} className="cartBlock_icon" />
      <span className="cartBlock_price"> 239.99 $ </span>
    </div>
  );
};
