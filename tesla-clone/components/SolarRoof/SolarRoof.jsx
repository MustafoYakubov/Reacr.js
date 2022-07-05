import React from "react";
import styles from "../Header/header.module.scss";
import Reveal from "react-reveal/Reveal";

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
            <a href="#" className={styles.btn}>
              custom order
            </a>
            <a href="#" className={styles.btn}>
              exicting enventory
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default SolarRoof;
