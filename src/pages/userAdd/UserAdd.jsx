import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import styles from "./user.module.css";
import { Link } from "react-router-dom";
import {
  PermIdentity,
  CalendarToday,
  PhoneAndroid,
  LocationSearching,
  MailOutline,
} from "@material-ui/icons";

const UserAdd = (props) => {
  const { data } = props.location;
  const [user, setUser] = useState(data);
  const { name, address, username, phone, email } = user;

  //update
  const [update, setUpdate] = useState({ ...user, name: {} });

  const updateHandel = (e) => {
    if (e.target.name === "firstname" || e.target.name === "lastname") {
      setUpdate({
        ...update,
        name: { ...update.name, [e.target.name]: e.target.value },
      });
    } else {
      setUpdate({ ...update, [e.target.name]: e.target.value });
    }
  };

  //update database
  const updateClick = () => {
    setUser(update);
  };

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
              <h4>
                {name.firstname} {name.lastname}
              </h4>
              <p>{address.city}</p>
            </div>
          </div>
          <hr />
          <div className={styles.userInfoBottom}>
            <h5>Account Details</h5>
            <div className={styles.userInfoIcon}>
              <PermIdentity />
              <p>{username}</p>
            </div>
            <div className={styles.userInfoIcon}>
              <CalendarToday />
              <p>11/03/1378</p>
            </div>

            <h5>Contact Details</h5>
            <div className={styles.userInfoIcon}>
              <PhoneAndroid />
              <p>{phone}</p>
            </div>
            <div className={styles.userInfoIcon}>
              <MailOutline />
              <p>{email}</p>
            </div>
            <div className={styles.userInfoIcon}>
              <LocationSearching />
              <p>
                {address.city}, {address.street}
              </p>
            </div>
          </div>
        </div>
        <div className={styles.userUpdate}>
          <h3>Edit</h3>
          <form>
            <div className={styles.userUpdateLeft}>
              <div className={styles.userUpdatItem}>
                <label>Username</label>
                <input type="text" name="username" onChange={updateHandel} />
              </div>
              <div className={styles.userUpdatItem}>
                <label>Firstname</label>
                <input type="text" name="firstname" onChange={updateHandel} />
              </div>
              <div className={styles.userUpdatItem}>
                <label>Lastname</label>
                <input type="text" name="lastname" onChange={updateHandel} />
              </div>
              <div className={styles.userUpdatItem}>
                <label>Email</label>
                <input type="email" name="email" onChange={updateHandel} />
              </div>
              <div className={styles.userUpdatItem}>
                <label>Phone</label>
                <input type="text" name="phone" onChange={updateHandel} />
              </div>
            </div>
            <div className={styles.userUpdateRight}>
              <div></div>
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={updateClick}
                >
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

export default UserAdd;
