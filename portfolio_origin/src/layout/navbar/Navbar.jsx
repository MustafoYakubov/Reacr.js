import React, { useState } from "react";
import logo from "../../assets/icons/logo.svg";
import "./Navbar.scss";

const Navbar = () => {
  const [isActiveBtnAnimate, setIsActiveBtnAnimate] = useState(false);
  const [modal, setModal] = useState(false);
  function scrollToSkills() {
    window.scrollBy(0, 1600);
  }
  const scrollToAbout = () => {
    window.scrollBy(0, 900);
  };
  const scrollToPortfolio = () => {
    window.scrollBy(0, 2200);
  };
  const navBtnAnimate = () => {
    setIsActiveBtnAnimate((prev) => !prev);
  };
 

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid navbarHeader">
          <a className="navbar-brand">
            <img src={logo} alt="logo" />
          </a>
          <div
            className={`navMenu navbar-toggler ${
              isActiveBtnAnimate ? "active" : ""
            } `}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={navBtnAnimate}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <button
                className="nav-link active navbar_first_child "
                aria-current="page"
              >
                Home
              </button>
              <button onClick={scrollToAbout} className="nav-link">
                About
              </button>
              <button onClick={scrollToSkills} className="nav-link">
                Skills
              </button>
              <button onClick={scrollToPortfolio} className="nav-link">
                Portfolio
              </button>
     
              <li class="nav-item dropdown">
                <a
                  class="nav-link"
                  href="#"
                  id="navbarDarkDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Contact
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="tel:+998-99-994-62-29">
                      +998-99-994-62-29
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      target="_blank"
                      href="https://t.me/m_yakuboff"
                    >
                      Telegram
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="mailto:mustafa6143170@gmail.com "
                    >Email</a>
                  </li>
                </ul>
              </li>

            </div>
            <button className=" btn-yellow btn_navbar">
              <p>Hire me</p>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
