import { Avatar, Button } from "@material-ui/core";
import React, { useContext, useState } from "react";
import axios from "axios";
import styles from "./user.module.css";
import { Link } from "react-router-dom";
import {
  PermIdentity,
  CalendarToday,
  PhoneAndroid,
  LocationSearching,
  MailOutline,
} from "@material-ui/icons";
//context
import { UsersContext } from "../../context/UsersContextProvider";

const User = (props) => {
  const { users } = useContext(UsersContext);
  const id = props.match.params.id;
  const [user, setUser] = useState(users.find((item) => (item.id = id)));
  const { name, address, username, phone, email } = user;

  //update
  const [update, setUpdate] = useState(user);

  const updateHandel = (e) => {
    setUpdate({ ...update, [e.target.name]: e.target.value });
  };

  //update database
  const updateClick = () => {
    axios
      .patch(`https://fakestoreapi.com/users/${id}`, update)
      .then((response) => {
        const data = response.data;
        setUser(data);
      })
      .catch(() => alert("An error occurred Try again"));
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

export default User;
