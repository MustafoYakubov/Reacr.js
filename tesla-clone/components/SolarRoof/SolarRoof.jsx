import React from "react";
import styles from "../Header/header.module.scss";
import Reveal from "react-reveal/Reveal";
import Link from "next/link";

const SolarRoof = () => {
  return (
    <section className={styles.section}>
      <Reveal effect="fadeInUp">
        <div className={styles.textArea}>
          <h3>Solar Roof </h3>
          <p>Produce Clean Energy From Your Roof</p>
        </div>
      </Reveal>
      <Reveal effect="fadeInUp">
        <div className={styles.headerButtons}>
          <div style={{ display: "flex" }} className={styles.btnMain}>
            <Link href="/" className={styles.btn}>
              custom order
            </Link>
            <Link href="/" className={styles.btn}>
              exicting enventory
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default SolarRoof;
