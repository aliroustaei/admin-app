import { Avatar, Button } from "@material-ui/core";
import React from "react";
import styles from "./user.module.css";
import { TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import {
  PermIdentity,
  CalendarToday,
  PhoneAndroid,
  LocationSearching,
  MailOutline,
  Publish,
} from "@material-ui/icons";

const User = () => {
  return (
    <div className={styles.user}>
      <div className={styles.userTitle}>
        <h3>Edit User</h3>
        <Link to="/newuser">
          <Button variant="contained" color="primary">
            Create
          </Button>
        </Link>
      </div>
      <div className={styles.userContainer}>
        <div className={styles.userInfo}>
          <div className={styles.userInfoTop}>
            <Avatar />
            <div>
              <h4>Ali Roustaei</h4>
              <p>Tehran</p>
            </div>
          </div>
          <hr />
          <div className={styles.userInfoBottom}>
            <h5>Account Details</h5>
            <div className={styles.userInfoIcon}>
              <PermIdentity />
              <p>alirus78</p>
            </div>
            <div className={styles.userInfoIcon}>
              <CalendarToday />
              <p>11/03/1378</p>
            </div>

            <h5>Contact Details</h5>
            <div className={styles.userInfoIcon}>
              <PhoneAndroid />
              <p>09360278611</p>
            </div>
            <div className={styles.userInfoIcon}>
              <MailOutline />
              <p>aliroustaei@gmail.com</p>
            </div>
            <div className={styles.userInfoIcon}>
              <LocationSearching />
              <p>iran, tehran</p>
            </div>
          </div>
        </div>
        <div className={styles.userUpdate}>
          <h3>Edit</h3>
          <form>
            <div className={styles.userUpdateLeft}>
              <div className={styles.userUpdatItem}>
                <label>Username</label>
                <TextField
                  id="outlined-search"
                  label="Username"
                  type="text"
                  variant="outlined"
                  size="small"
                  className={styles.UpdatItem}
                />
              </div>
              <div className={styles.userUpdatItem}>
                <label>Full Name</label>
                <TextField
                  id="outlined-search"
                  label="Full Name"
                  type="text"
                  variant="outlined"
                  size="small"
                />
              </div>
              <div className={styles.userUpdatItem}>
                <label>Email</label>
                <TextField
                  id="outlined-search"
                  label="Email"
                  type="text"
                  variant="outlined"
                  size="small"
                />
              </div>
              <div className={styles.userUpdatItem}>
                <label>Phone</label>
                <TextField
                  id="outlined-search"
                  label="Phone"
                  type="text"
                  variant="outlined"
                  size="small"
                />
              </div>
              <div className={styles.userUpdatItem}>
                <label>Adrdess</label>
                <TextField
                  id="outlined-search"
                  label="Address"
                  type="text"
                  variant="outlined"
                  size="small"
                />
              </div>
            </div>
            <div className={styles.userUpdateRight}>
              <div className={styles.userUpdateImg}>
                <Avatar />
                <label htmlFor="file">
                  <Publish />
                </label>
                <input type="file" id="file" />
              </div>
              <div>
                <Button variant="contained" color="primary">
                  Update
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
