import React, { useState } from "react";
import styles from "../../layout/Navbar/navbar.module.scss";
import Link from "next/link";
import { SideBar } from "../../layout/Navbar/SideBar";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
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
          <Link>
            <Image
              className={styles.teslaLogo}
              src="/images/logo.svg"
              alt="logo"
              loading="lazy"
            />
          </Link>
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
