import React, { useState } from "react";
import styles from "./navbar.module.scss";
import Link from "next/link";
import { SideBar } from "./SideBar";
import CloseIcon from "@mui/icons-material/Close";
const Navbar = () => {
  const [sideBar, setsideBar] = useState(false);
  const showSideBar = () => {
    setsideBar((prev) => {
      return !prev;
    });
  };

  return (
    <>
      <nav className={styles.navbar}>
        <Link href="/">
          <a>
            <img
              className={styles.teslaLogo}
              src="/images/logo.svg"
              alt="logo"
              loading="lazy"
            />
          </a>
        </Link>
        {/* NAV LINK */}
        <ul className={styles.navbarNav}>
          <li className={styles.items}>
            <Link href="/" className={styles.itemsLink}>
              Model S
            </Link>
          </li>
          <li className={styles.items}>
            <Link href="/" className={styles.itemsLink}>
              Model 3
            </Link>
          </li>
          <li className={styles.items}>
            <Link href="/" className={styles.itemsLink}>
              Model X
            </Link>
          </li>
          <li className={styles.items}>
            <Link href="/" className={styles.itemsLink}>
              Model Y
            </Link>
          </li>
          <li className={styles.items}>
            <Link href="/" className={styles.itemsLink}>
              Solar Roof
            </Link>
          </li>
          <li className={styles.items}>
            <Link href="/" className={styles.itemsLink}>
              Solar Panels
            </Link>
          </li>
        </ul>
        {/* NAV MENU */}
        <div className={styles.menu}>
          <li className={styles.items}>
            <Link href="/" className={styles.itemsLink}>
              Shop
            </Link>
          </li>
          <li className={styles.items}>
            <Link href="/teslaaccount" className={styles.itemsLink}>
              Account
            </Link>
          </li>
          <li className={styles.items} onClick={showSideBar}>
            <Link href="#"> Menu</Link>
          </li>
        </div>
        <div
          className={
            sideBar
              ? styles["sideMenu"] + " " + styles["active"]
              : styles["sideMenu"]
          }
        >
          <CloseIcon
            className={styles.closeIcon}
            onClick={() => setsideBar(false)}
          />
          <ul className={styles.sideBarNav}>
            {SideBar.map((item, key) => {
              return (
                <li key={key} className={styles.hamburgerLinks}>
                  <Link href={item.path}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
      {/* SIDE BAR MENU */}
    </>
  );
};

export default Navbar;
