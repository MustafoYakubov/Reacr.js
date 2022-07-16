import React, { useState } from "react";
import styles from "../../layout/Navbar/navbar.module.scss";
import Link from "next/link";
import { SideBar } from "../../layout/Navbar/SideBar";
import CloseIcon from "@mui/icons-material/Close";
const AccountNavbar = () => {
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
            <a href="/" className={styles.itemsLink}>
              Model S
            </a>
          </li>
          <li className={styles.items}>
            <a href="/" className={styles.itemsLink}>
              Model 3
            </a>
          </li>
          <li className={styles.items}>
            <a href="/" className={styles.itemsLink}>
              Model X
            </a>
          </li>
          <li className={styles.items}>
            <a href="/" className={styles.itemsLink}>
              Model Y
            </a>
          </li>
          <li className={styles.items}>
            <a href="/" className={styles.itemsLink}>
              Solar Roof
            </a>
          </li>
          <li className={styles.items}>
            <a href="/" className={styles.itemsLink}>
              Solar Panels
            </a>
          </li>
        </ul>
        {/* NAV MENU */}
        <div className={styles.menu}>
          <li className={styles.items}>
            <a href="/" className={styles.itemsLink}>
              Shop
            </a>
          </li>
          <li className={styles.items}>
            <Link href="/teslaaccount">Account</Link>
          </li>
          <li className={styles.items} onClick={showSideBar}>
            Menu
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

export default AccountNavbar;
