import React from "react";
import { Link } from "react-router-dom";
import { CardBlog } from "../cardBlog/CardBlog";
import "./Header.scss";
export const Header = () => {
  return (
    <div className="header">
      <div className="wrapper">
        <Link to="/" className="header_title">
          Game Store
        </Link>
        <div className="wrapper header_card_btn">
          <CardBlog />
        </div>
      </div>
    </div>
  );
};
