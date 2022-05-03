import React from "react";
import "./portfolio.scss";
import gameRisk from "../../assets/img/";
const Portfolio = () => {
  return (
    <>
      <section className="portfolio">
        <div className="row">
          <div className=" main_img col-8">
            <div className="card">
              <div className="card-body">
                <img className="w-100 main_portfolio_img" src={gameRisk} alt="gameRisk " />
              </div>
              <div className="card-text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus in sequi iusto cum officia, minus ad recusandae ea
                  id odit quibusdam laudantium eligendi dicta praesentium omnis
                  vitae modi, unde nam.
                </p>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card">
              <div className="card-body"><h1>aa</h1></div>
            </div>
          </div>
          <div className="col-6">
            <div className="card">
              <div className="card-body"></div>
            </div>
          </div>
          <div className="col-6">
            <div className="card">
              <div className="card-body"></div>
            </div>
          </div>
          <div className="col-6">
            <div className="card">
              <div className="card-body"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
