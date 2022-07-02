import styles from "./header.module.scss";
const Header = () => {
  return (
    <section className={styles.section}>
      <div className={styles.textArea}>
        <h3>Model 3</h3>
        <p>
          Order Online for
          <span className={styles.touchless}>Touchless delivery</span>
        </p>
      </div>
      <div className={styles.headerButtons}>
        
        <div style={{display:'flex'}} className={styles.btnMain}>
          <a href="#" className={styles.btn}>
            custom order
          </a>
          <a href="" className={styles.btn}>
            exicting enventory
          </a>
        </div>
      </div>
      <img
        width={50}
        height={40}
        src="/images/down-arrow.svg"
        alt="down icon"
        className={styles.downIcon}
      />
    </section>
  );
};

export default Header;
