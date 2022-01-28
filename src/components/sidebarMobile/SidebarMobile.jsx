import { useState } from "react";
import styles from "./sidebarMobile.module.css";
import { Link } from "react-router-dom";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";

const SidebarMobile = () => {
  const [burger, SetBurger] = useState(false);
  var open = `${styles.sidebar} ${styles.open}`;
  var close = `${styles.hamBurger} ${styles.close}`;

  const burgerHandel = () => {
    SetBurger(!burger);
  };

  return (
    <div className={!burger ? styles.sidebar : open}>
      <div
        onClick={burgerHandel}
        className={!burger ? styles.hamBurger : close}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={styles.sidebarWrapper}>
        <div className={styles.sidebarMenu}>
          <ul className={styles.sidebarList}>
            <Link to="/">
              <li className={`${styles.sidebarListItem} ${styles.active}`}>
                <LineStyle className={styles.sidebarIcon} />
                Home
              </li>
            </Link>

            <li className={styles.sidebarListItem}>
              <Timeline className={styles.sidebarIcon} />
              Analytics
            </li>
            <li className={styles.sidebarListItem}>
              <TrendingUp className={styles.sidebarIcon} />
              Sales
            </li>
          </ul>
        </div>
        <div className={styles.sidebarMenu}>
          <ul className={styles.sidebarList}>
            <Link to="/users">
              <li className={styles.sidebarListItem}>
                <PermIdentity className={styles.sidebarIcon} />
                Users
              </li>
            </Link>

            <Link to="/products">
              <li className={styles.sidebarListItem}>
                <Storefront className={styles.sidebarIcon} />
                Products
              </li>
            </Link>

            <li className={styles.sidebarListItem}>
              <AttachMoney className={styles.sidebarIcon} />
              Transactions
            </li>
            <li className={styles.sidebarListItem}>
              <BarChart className={styles.sidebarIcon} />
              Reports
            </li>
          </ul>
        </div>
        <div className={styles.sidebarMenu}>
          <ul className={styles.sidebarList}>
            <li className={styles.sidebarListItem}>
              <MailOutline className={styles.sidebarIcon} />
              Mail
            </li>
            <li className={styles.sidebarListItem}>
              <DynamicFeed className={styles.sidebarIcon} />
              Feedback
            </li>
            <li className={styles.sidebarListItem}>
              <ChatBubbleOutline className={styles.sidebarIcon} />
              Messages
            </li>
          </ul>
        </div>
        <div className={styles.sidebarMenu}>
          <ul className={styles.sidebarList}>
            <li className={styles.sidebarListItem}>
              <WorkOutline className={styles.sidebarIcon} />
              Manage
            </li>
            <li className={styles.sidebarListItem}>
              <Timeline className={styles.sidebarIcon} />
              Analytics
            </li>
            <li className={styles.sidebarListItem}>
              <Report className={styles.sidebarIcon} />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SidebarMobile;
