import React from "react";
import styles from "../Header/header.module.scss";
const SolarRoof = () => {
  return (
    <section className={styles.section}>
      <div className={styles.textArea}>
        <h3>Solar Roof </h3>
        <p>Produce Clean Energy From Your Roof</p>
      </div>
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
    </section>
  );
};

export default SolarRoof;
