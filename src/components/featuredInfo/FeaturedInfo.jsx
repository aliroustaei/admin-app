import React from "react";
import styles from "./featuredInfo.module.css";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

const FeaturedInfo = () => {
  return (
    <div className={styles.FeaturedInfoBox}>
      <div className={`${styles.FeaturedInfo} ${styles.revanue}`}>
        <h3>Revanue</h3>
        <div className={styles.numberInfo}>
          <h2>$2,178</h2>
          <div>
            <span>+1.2</span>
            <ExpandLess className={styles.iconGreen} />
          </div>
        </div>
        <small>Compared to last week</small>
      </div>

      <div className={`${styles.FeaturedInfo} ${styles.sales}`}>
        <h3>Sales</h3>
        <div className={styles.numberInfo}>
          <h2>$8,568</h2>
          <div>
            <span>+2.4</span>
            <ExpandLess className={styles.iconGreen} />
          </div>
        </div>
        <small>Compared to last week</small>
      </div>

      <div className={`${styles.FeaturedInfo} ${styles.cost}`}>
        <h3>Cost</h3>
        <div className={styles.numberInfo}>
          <h2>$1,678</h2>
          <div>
            <span>-0.8</span>
            <ExpandMore className={styles.iconRed} />
          </div>
        </div>
        <small>Compared to last week</small>
      </div>
    </div>
  );
};

export default FeaturedInfo;
