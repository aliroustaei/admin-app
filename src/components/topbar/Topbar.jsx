import React, { useState } from "react";
import styles from "./Topbar.module.css";
import { Badge, IconButton, Switch } from "@material-ui/core";
import { Language, NotificationsNone, Settings } from "@material-ui/icons";
import moon from "../../image/moon.svg";
import sun from "../../image/sun.svg";

const Topbar = () => {
  const [themeImg, setThemeImg] = useState(true);
  const handleChange = () => {
    document.body.classList.toggle("dark-Theme");
    setThemeImg(!themeImg);
  };

  return (
    <div className={styles.topbox}>
      <div className={styles.topbarBox}>
        <div className={styles.topbarLeft}>
          <span className={styles.logo}>AddMin</span>
        </div>
        <div className={styles.topbarRight}>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsNone />
            </Badge>
          </IconButton>

          <IconButton color="inherit">
            <Language />
          </IconButton>

          <IconButton color="inherit">
            <Settings />
          </IconButton>

          <Switch
            // checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
            color="primary"
          />
          <img
            src={themeImg ? moon : sun}
            alt=""
            className={styles.topbarimg}
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
