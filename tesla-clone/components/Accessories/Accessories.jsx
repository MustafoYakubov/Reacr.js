import React from "react";
import styles from "../Header/header.module.scss";
const Accessories = () => {
  return (
    <section className={styles.section}>
      <div className={styles.textArea}>
        <h3>Accessories </h3>
        {/* <p>Produce Clean Energy From Your Roof</p> */}
      </div>
      <div className={styles.headerButtons}>
        <div style={{ display: "flex" }} className={styles.btnMain}>
          <a href="#" className={styles.btn}>
          Shop Now
          </a>
       
        </div>
      </div>
    </section>
  );
};

export default Accessories;
