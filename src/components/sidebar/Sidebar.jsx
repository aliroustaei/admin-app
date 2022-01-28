import styles from "./sidebar.module.css";
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

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarWrapper}>
        <div className={styles.sidebarMenu}>
          <h3 className={styles.sidebarTitle}>Dashboard</h3>
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
          <h3 className={styles.sidebarTitle}>Quick Menu</h3>
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
          <h3 className={styles.sidebarTitle}>Notifications</h3>
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
          <h3 className={styles.sidebarTitle}>Staff</h3>
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

export default Sidebar;
