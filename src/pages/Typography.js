import styles from "./Typography.module.css";

const Typography = () => {
  return (
    <div className={styles.typography}>
      <div className={styles.typographyChild} />
      <img className={styles.backgroundIcon} alt="" src="/background2.svg" />
      <img className={styles.backgroundIcon1} alt="" src="/background2.svg" />
      <div className={styles.frameParent}>
        <div className={styles.groupParent}>
          <div className={styles.vectorParent}>
            <img className={styles.groupChild} alt="" src="/vector-20.svg" />
            <b className={styles.colors}>COLORS</b>
          </div>
          <div className={styles.ellipseParent}>
            <div className={styles.groupItem} />
            <div className={styles.groupInner} />
            <div className={styles.ellipseDiv} />
            <div className={styles.groupChild1} />
            <div className={styles.e6c744}>#E6C744</div>
            <div className={styles.ffffff}>#FFFFFF</div>
            <div className={styles.div}>#000000</div>
            <div className={styles.c2c8da}>#C2C8DA</div>
          </div>
        </div>
        <div className={styles.groupParent}>
          <div className={styles.vectorGroup}>
            <img className={styles.vectorIcon} alt="" src="/vector-20.svg" />
            <b className={styles.colors}>FONT</b>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.poppinsBlackParent}>
              <div className={styles.poppinsBlack}>Poppins - Black</div>
              <div className={styles.poppinsMedium}>Poppins - Medium</div>
              <div className={styles.poppinsRegular}>Poppins - Regular</div>
            </div>
            <div className={styles.aaBbCcContainer}>
              <p className={styles.aaBb}>Aa Bb Cc Dd Ee Ff....</p>
              <p className={styles.blankLine}>&nbsp;</p>
              <p className={styles.blankLine}>123456789</p>
              <p className={styles.blankLine}>&nbsp;</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Typography;
