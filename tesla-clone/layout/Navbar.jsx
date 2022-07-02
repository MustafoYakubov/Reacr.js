import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <Image
          className={styles.teslaLogo}
          src="/images/logo.svg"
          alt="logo"
          loading="lazy"
          width="150px"
          height="21px"
        />
      </Link>
      {/* NAV LINK */}
      <ul className={styles.navbarNav}>
        <li className={styles.items}>
          <a href="/">Model S</a>
        </li>
        <li className={styles.items}>
          <a href="/">Model 3</a>
        </li>
        <li className={styles.items}>
          <a href="/">Model X</a>
        </li>
        <li className={styles.items}>
          <a href="/">Model Y</a>
        </li>
        <li className={styles.items}>
          <a href="/">Solar Roof</a>
        </li>
        <li className={styles.items}>
          <a href="/">Solar Panels</a>
        </li>
      </ul>
      {/* NAV MENU */}
      <div className={styles.menu}>
        <li className={styles.items}>
          <a href="/">Solar Panels</a>
        </li>
        <li className={styles.items}>
          <a href="/">Solar Panels</a>
        </li>
        <li className={styles.items}>
          <a href="/">Solar Panels</a>
        </li>
      </div>
    </nav>
  );
};

export default Navbar;
