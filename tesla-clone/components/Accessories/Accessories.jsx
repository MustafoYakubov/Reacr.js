import React from "react";
import styles from "../Header/header.module.scss";
import Reveal from "react-reveal/Reveal";
import Link from "next/link";
const Accessories = () => {
  return (
    <section className={styles.section}>
      <Reveal effect="fadeInUp">
        <div className={styles.textArea}>
          <h3>Accessories </h3>
        </div>
      </Reveal>
      <Reveal effect="fadeInUpForBtns">
        <div className={styles.headerButtons}>
          <div style={{ display: "flex" }} className={styles.btnMain}>
            <Link href="/" id="access" className={styles.btn}>
              Shop Now
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default Accessories;
