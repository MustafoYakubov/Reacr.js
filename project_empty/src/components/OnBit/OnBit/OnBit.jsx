import React from "react";
import OnBitText from "../OnBitText/OnBitText";
import eyes from "../../../assets/img/eyes.jpg";
import "./OnBit.scss";
const OnBit = () => {
  return (
    <>
      <h1>Hot Bid</h1>
      <div className="section_hotBid">
        <div className="row">
          <div className="col-3">
            img 1
            <OnBitText />
          </div>
          <div className="col-3">
            img2
            <OnBitText />
          </div>

          <div className="col-3">
            img3 <OnBitText />
          </div>
          <div className="col-3">
            img 4 <OnBitText />
          </div>
        </div>
      </div>

      {/* // CAROUSEL FOR MOBILE */}
      <div className="carousel-mobile">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={eyes} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={eyes} className="d-block w-100 " alt="..." />
            </div>
            <div className="carousel-item">
              <img src={eyes} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/* CAROUSEL END  */}
        <div>
          <h1>hello its carousel</h1>
          <button>click me</button>
        </div>
      </div>
    </>
  );
};

export default OnBit;
