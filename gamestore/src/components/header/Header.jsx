import { Link } from "react-router-dom";
import { CartBlog } from "../cartBlog/CartBlog";
import "./Header.scss";
export const Header = () => {
  return (
    <div className="header">
      <div className="wrapper">
        <Link to="/" className="header_title">
          Game Store
        </Link>
        <div className="wrapper header_card_btn">
          <CartBlog />
        </div>
      </div>
    </div>
  );
};
