import React from "react";
import styles from '../Header/header.module.scss';
const ModelY = () => {
  return (
    <section className={styles.section}>
      <div className={styles.textArea}>
        <h3>Model Y</h3>
        <p>
          Order Online for
          <span className={styles.touchless}>Touchless delivery</span>
        </p>
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

export default ModelY;
