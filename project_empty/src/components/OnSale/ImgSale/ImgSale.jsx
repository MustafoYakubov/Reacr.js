import React from "react";
import "./ImgSale.scss";
import img from "../../../assets/img/img-1.jpg";
import logoSaler from "../../../assets/img/saler.png";
const ImgSale = (props) => {
  const { img, textH4, logo, page } = props;
  console.log(textH4, page);
  return (
    <div className="fatherRow row">
      <div className="col-5">
        <img className="imgSale" src={img} alt="img" />
      </div>
      <div className="col-7">
        <h4 className="imgH4">{textH4}</h4>
        <div className="infos">
          <img className="logo" src={logo} alt="logo" />
          <p className="price">0.27 ETH</p>
          <p className="pages">{page}</p>
        </div>
        <button type="button" className="imgBtn">
          <p>Place a bid</p>
        </button>
      </div>
    </div>
  );
};

export default ImgSale;
