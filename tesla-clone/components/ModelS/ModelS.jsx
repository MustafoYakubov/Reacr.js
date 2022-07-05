import styles from "../Header/header.module.scss";
import Reveal from "react-reveal/Reveal";
const ModelS = () => {
  return (
    <section className={styles.section}>
      <Reveal effect="fadeInUp">
        <div className={styles.textArea}>
          <h3>Model S</h3>
          <p>
            Order Online for
            <span className={styles.touchless}>Touchless delivery</span>
          </p>
        </div>
      </Reveal>
      <Reveal effect="fadeInUpForBtns">
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

export default ModelS;
