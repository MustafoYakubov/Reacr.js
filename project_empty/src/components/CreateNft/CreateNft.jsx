import React from "react";
import "./CreateNft.scss";
import esco from "../.././assets/img/esco.png"
const CreateNft = () => {
  return (
    <>
      <div className="createNft mb-5">
        <div className="footer-line"></div>

        <div className="row">
          <div className="col-xxl-6 col-sm-12">
            <p>Save your time with Stacks</p>
            <h1>Earn free crypto with Crypter</h1>
            <p>A creative agency that lead and inspire</p>
            <div className="createNft_btns d-flex">
              <button className="btn btn-primary "> Earn now</button>
              <button className="btn  btn-light"> Discover more</button>
            </div>
          </div>
          <div className="col-xxl-6 col-sm-12"> <img className="esco w-100 d-block" src={esco} alt="esco" /></div>
        </div>
      </div>
    </>
  );
};

export default CreateNft;
