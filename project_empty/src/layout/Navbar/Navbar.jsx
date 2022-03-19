import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/icons/symbol.svg";
import styles from "../Navbar/Navbar.module.scss";
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img className={styles.logo} src={logo} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/">
                Discover
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/how-it-works">
                How it Work
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <a href=""> icon ring </a>
            <button>upload</button>
            <button>Connect Wallet</button>
          </form>
        </div>
      </div>
    </nav>
  );
}
