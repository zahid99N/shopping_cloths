import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroSectionChild} />
      <div className={styles.wwwnickelfoxcom}>www.nickelfox.com</div>
      <img className={styles.backgroundIcon} alt="" src="/background.svg" />
      <img className={styles.backgroundIcon1} alt="" src="/background.svg" />
      <div className={styles.heroSection1}>
        <img className={styles.heroSectionItem} alt="" src="/star-91.svg" />
        <img className={styles.heroSectionInner} alt="" src="/star-10.svg" />
        <img className={styles.starIcon} alt="" src="/star-11.svg" />
        <img className={styles.heroSectionChild1} alt="" src="/star-12.svg" />
        <img className={styles.heroSectionChild2} alt="" src="/star-13.svg" />
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.groupItem} />
          <div className={styles.groupInner} />
          <div className={styles.letsExploreUniqueContainer}>
            <p className={styles.lets}>LET’S</p>
            <p className={styles.lets}>EXPLORE</p>
            <p className={styles.lets}>UNIQUE</p>
            <p className={styles.lets}>CLOTHES.</p>
          </div>
          <div className={styles.liveForInfluential}>
            Live for Influential and Innovative fashion!
          </div>
          <img
            className={styles.incendiaryFantasticallyBeautIcon}
            alt=""
            src="/incendiaryfantasticallybeautifulgirlcoatecofurmovesfunpicturelovelyladypinkclothesremovebgpreview-1@2x.png"
          />
          <div className={styles.groupWrapper}>
            <div className={styles.rectangleGroup}>
              <div className={styles.rectangleDiv} />
              <div className={styles.shopNow}>SHOP NOW</div>
            </div>
          </div>
        </div>
        <img className={styles.groupIcon} alt="" src="/group-771.svg" />
        <div className={styles.heroSectionChild3} />
        <div className={styles.rectangleContainer}>
          <img
            className={styles.frameChild}
            alt=""
            src="/rectangle-36@2x.png"
          />
          <img className={styles.frameItem} alt="" src="/rectangle-44@2x.png" />
          <img
            className={styles.frameInner}
            alt=""
            src="/rectangle-38@2x.png"
          />
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle-45@2x.png"
          />
          <img
            className={styles.frameChild1}
            alt=""
            src="/rectangle-43@2x.png"
          />
          <img
            className={styles.frameChild2}
            alt=""
            src="/rectangle-41@2x.png"
          />
        </div>
        <div className={styles.frameParent}>
          <div className={styles.vectorParent}>
            <img className={styles.vectorIcon} alt="" src="/vector15.svg" />
            <div className={styles.fashion}>FASHION</div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.catalogueParent}>
              <div className={styles.catalogue}>CATALOGUE</div>
              <div className={styles.fashion1}>FASHION</div>
              <div className={styles.favourite}>FAVOURITE</div>
              <div className={styles.lifestyle}>LIFESTYLE</div>
            </div>
            <div className={styles.groupDiv}>
              <div className={styles.groupChild1} />
              <div className={styles.signUp}>SIGN UP</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
