import React, { useState } from "react";
import logo from "../../assets/icons/logo.svg";
import "./Navbar.scss";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isActiveBtnAnimate, setIsActiveBtnAnimate] = useState(false);
  const toggleBtn = () => setToggle((prev) => !prev);
  function scrollWin() {
    window.scrollBy(0, 900);
  }
  const navBtnAnimate = () => {
    setIsActiveBtnAnimate((prev) => !prev);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid navbarHeader">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="logo" />
          </a>
          <div
            className={`navMenu navbar-toggler ${
              isActiveBtnAnimate ? "active" : ""
            } `}
            // className=" "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={navBtnAnimate}
          >
            {/* <span className="navbar-toggler-icon"></span> */}
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a
                className="nav-link active navbar_first_child "
                aria-current="page"
              >
                Home
              </a>
              <a className="nav-link" href="#">
                About
              </a>
              <a onClick={scrollWin} className="nav-link" href="#">
                Skills
              </a>
              <a className="nav-link" href="#">
                Portfolio
              </a>
              <a className="nav-link" href="#">
                Contact
              </a>
            </div>
            <button className=" btn-yellow">
              <p>Hire me</p>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
