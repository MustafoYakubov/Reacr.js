import React from "react";
import "../sectionSale/sectionSale.scss";
import salerLogo from "../../../assets/img/saler.png";
import greenIcon from "../../../assets/img/green-icon.png";
const SectionSale = () => {
  return (
    <div className="container">
      <div className="row prices">
        <div className="col-12">
          <div className="sale-head">
            <h1 className="sale-h1">the creator network®</h1>
            <div className="saler-data">
              <img className="saler-icons" src={salerLogo} alt="saler-logo" />
              <p className="creator-price">Creator</p>
              <span className="name-numb">Enrico Cole</span>
              <img
                className="saler-icons green-icon"
                src={greenIcon}
                alt="greenIcon"
              />
              <p className="creator-price">Instant price</p>
              <span className="name-numb">3.5 ETH</span>
            </div>
          </div>
        </div>
        <div className="box-current">
          <div className="col-12">
            <p className="bid">Current Bid</p>
            <h1 className="eth">1.00 ETH</h1>
            <h4 className="price-dlr">$3,618.36</h4>
            <p className="bid">Auction ending in</p>
            <div className="auction-time-numb">
              <h3 className="numbs">19</h3>
              <h3 className="numbs">24</h3>
              <h3 className="numbs">19</h3>
            </div>
            <div className="auction-minute">
              <p className="hrs"> Hrs</p>
              <p className="hrs"> mins</p>
              <p className="hrs"> secs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSale;
