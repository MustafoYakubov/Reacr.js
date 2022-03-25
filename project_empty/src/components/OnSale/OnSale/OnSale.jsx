import React from "react";
import "./OnSale.scss";
import eyes from "../../../assets/img/eyes.jpg";
import saler from "../../../assets/img/saler.png";
import ImgSale from "../ImgSale/ImgSale";
import img1 from "../../../assets/img/img-1.jpg";
import img2 from "../../../assets/img/img-2.jpg";
import img3 from "../../../assets/img/img3.png";
import logoSaler from "../../../assets/img/saler.png";

const onSale = () => {
  const eth = "ETH never die";
  const future = "Future coming soon";
  const elon = "Elon Musk silver coin 3d print";
  const page1 = "1 of 12";
  const page2 = "1 of 3";
  const page3 = "1 of 4";
  return (
    <>
      <div className=" row onSaleRow">
        <div className="col-xxl-4 col-sm-12">
          <div className="row-1">
            <img className="eyes" src={eyes} alt="eyes" />
            <div className="row-1-text">
              <img className="saler" src={saler} alt="saler" />
              <h4>
                The future of ETH® <span>18 in stock</span>
              </h4>
              <p>
                highest bid <span>1.125 ETH</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="row-2">
            <div className="row fatherRow">
              <ImgSale img={img1} textH4={eth} logo={logoSaler} page={page1} />
              <ImgSale
                img={img2}
                textH4={future}
                logo={logoSaler}
                page={page2}
              />
              <ImgSale img={img3} textH4={elon} logo={logoSaler} page={page3} />
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="row-3">row-3</div>
        </div>
      </div>
    </>
  );
};

export default onSale;
