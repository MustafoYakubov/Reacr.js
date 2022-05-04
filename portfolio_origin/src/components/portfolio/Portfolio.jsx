import React from "react";
import "./portfolio.scss";
import gameRisk from "../../assets/img/game.png";
import gameNumber from "../../assets/img/gameNumber.png";
import nftStore from "../../assets/img/nft.jpg";
import pumaStore from "../../assets/img/pum.jpg";
import samsungStore from "../../assets/img/samsungStore.jpg";
const Portfolio = () => {
  return (
    <>
      <section className="portfolio">
        <div className="row">
          <div className="col-xl-4 col-sm-10">
            <div className="card">
              <div className="card-body">
                <img
                  className="w-100 imgs_corners "
                  src={nftStore}
                  alt="gameRisk "
                />
                <div className="card-footer">
                  <p>made with : <span> Bootstrap</span> </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-sm-10">
            <div className="card">
              <div className="card-body">
                <img
                  className="w-100 web_games_img"
                  src={gameNumber}
                  alt="gameRisk"
                />
                <div className="card-footer"></div>
              </div>
            </div>
            <div className="card mt-5">
              <div className="card-body">
                <img
                  className="w-100 web_games_img "
                  src={gameRisk}
                  alt="gameRisk"
                />
                <div className="card-footer"></div>
              </div>
            </div>
            <div className="card mt-5">
              <div className="card-body">
                <img
                  className="w-100 web_games_img "
                  src={samsungStore}
                  alt="gameRisk"
                />
                <div className="card-footer"></div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-sm-10">
            <div className="card">
              <div className="card-body">
                <img
                  className="w-100  imgs_corners"
                  src={pumaStore}
                  alt="pumaStore"
                />
                <div className="card-footer"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
