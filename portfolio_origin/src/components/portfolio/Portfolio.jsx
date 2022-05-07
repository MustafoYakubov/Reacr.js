import React from "react";
import "./portfolio.scss";
import gameRisk from "../../assets/img/game.png";
import gameNumber from "../../assets/img/gameNumber.png";
import nftStore from "../../assets/img/nft.jpg";
import pumaStore from "../../assets/img/pum.jpg";
import samsungStore from "../../assets/img/samsungStore.jpg";
// import react from "../../assets/icons/react.png";
// import html from "../../assets/icons/html.png";
// import sass from "../../assets/icons/sass.png";
// import bootstrap from "../../assets/icons/bootstrap.png";
const Portfolio = () => {
  return (
    <>
      <div className="line mt-5"></div>
      <section className="portfolio">
        <h1 className="title">PortFolio</h1>
        <div className="row">
          <div className="col-xl-4 col-sm-10">
            <img className="w-100" src={pumaStore} alt="pumaStore" />
            <div className="card-footer">
              <div className="card_footer_txt">
                <span>HTML</span>
                <span>JQuery</span>
                <span>CSS</span>
                <span>Bootstrap</span>
              </div>
              <div className="card_footer_btns">
                <div className="btn-yellow">
                  <a
                    target="_blank"
                    href="https://github.com/DushanovShamshod/MustafoYakubov/tree/main/puma"
                  >
                    View Code
                  </a>
                </div>
                <div className="btn-yellow">
                  <a target="_blank" href="https://pumastore.netlify.app/ ">
                    View web-site
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-sm-10">
            <img className="w-100" src={samsungStore} alt="samsungStore" />
            <div className="card-footer">
              <div className="card_footer_txt">
                <span>Html</span>
                <span>SCSS</span>
                <span>Bootstrap</span>
              </div>
              <div className="card_footer_btns">
                <div className="btn-yellow">
                  <a href="https://github.com"> View Code</a>
                </div>
                <div className="btn-yellow">
                  <a>View web-site</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-sm-10">
            <img className="w-100" src={nftStore} alt="nftStore" />
            <div className="card-footer">
              <div className="card_footer_txt">
                <span>ReactJS</span>
                <span>HTML</span>
                <span>SCSS</span>
                <span>Bootstrap</span>
              </div>
              <div className="card_footer_btns">
                <div className="btn-yellow">
                  <a href="https://github.com/DushanovShamshod/MustafoYakubov/tree/main/project_empty">
                    View Code
                  </a>
                </div>
                <div className="btn-yellow">
                  <a href="https://nft-marketplacr.netlify.app/">
                    View Web-Site
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-sm-10 mt-5">
            <img className="w-100" src={gameRisk} alt="gameRisk" />
            <div className="card-footer">
              <div className="card_footer_txt">
                <span> JavaScript</span>
                <span>HTML</span>
                <span>SCSS</span>
              </div>
              <div className="card_footer_btns">
                <div className="btn-yellow">
                  <a href="https://github.com"> View Code</a>
                </div>
                <div className="btn-yellow">
                  <a href="https://nft-marketplacr.netlify.app/"> View Code</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-sm-10 mt-5">
            <img className="w-100" src={gameNumber} alt="gameNumber" />
            <div className="card-footer">
              <div className="card_footer_txt">
                <span>JavaScript</span>
                <span>HTML</span>
                <span>SCSS</span>
              </div>
              <div className="card_footer_btns">
                <div className="btn-yellow">
                  <a href="https://github.com"> View Code</a>
                </div>
                <div className="btn-yellow">
                  <a>View web-site</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
// background-color: rgb(30, 31, 28) !important;

export default Portfolio;
