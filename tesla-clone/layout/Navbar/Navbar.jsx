import React from "react";
import styles from "./navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
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
            Solar Panels
          </a>
        </li>
        <li className={styles.items}>
          <a href="/" className={styles.itemsLink}>
            Solar Panels
          </a>
        </li>
        <li className={styles.items}>
          <a href="/" className={styles.itemsLink}>
            Solar Panels
          </a>
        </li>
      </div>
    </nav>
  );
};

export default Navbar;
