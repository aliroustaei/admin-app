import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./newUser.module.css";
import { RadioGroup, Radio, FormControlLabel, Button } from "@material-ui/core";

const NewUser = () => {
  const [newUser, setNewUser] = useState({ name: {}, address: {} });
  let sendDataUser = Object.keys(newUser).length;

  const newUserHandle = (e) => {
    if (e.target.name === "firstname" || e.target.name === "lastname") {
      setNewUser({
        ...newUser,
        name: { ...newUser.name, [e.target.name]: e.target.value },
      });
    } else if (e.target.name === "city" || e.target.name === "street") {
      setNewUser({
        ...newUser,
        address: { ...newUser.address, [e.target.name]: e.target.value },
      });
    } else {
      setNewUser({ ...newUser, [e.target.name]: e.target.value });
    }
    console.log(newUser, sendDataUser);
  };

  const sendData = () => {
    if (sendDataUser < 6) {
      alert("please enter data");
    }
  };

  return (
    <div className={styles.newUser}>
      <h3>New User</h3>
      <form>
        <div className={styles.newUserLeft}>
          <div className={styles.userUpdatItem}>
            <label>Firstname</label>
            <input type="text" name="firstname" onChange={newUserHandle} />
          </div>
          <div className={styles.userUpdatItem}>
            <label>Lastname</label>
            <input type="text" name="lastname" onChange={newUserHandle} />
          </div>
          <div className={styles.userUpdatItem}>
            <label>Username</label>
            <input type="text" name="username" onChange={newUserHandle} />
          </div>
          <div className={styles.userUpdatItem}>
            <label>Email</label>
            <input type="email" name="email" onChange={newUserHandle} />
          </div>
          <div className={styles.userUpdatItem}>
            <label>Password</label>
            <input type="text" name="Password" onChange={newUserHandle} />
          </div>
          <div className={styles.userUpdatItem}>
            <label>Phone</label>
            <input type="text" name="phone" onChange={newUserHandle} />
          </div>
          <div className={styles.userUpdatItem}>
            <label>Address</label>
            <div>
              <div className={styles.userAddress}>
                <label>City: </label>
                <input type="text" name="city" onChange={newUserHandle} />
              </div>
              <div>
                <label>Street: </label>
                <input type="text" name="street" onChange={newUserHandle} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.newUserRight}>
          <div className={styles.userUpdatItem}>
            <label>Gender</label>

            <RadioGroup aria-label="gender" name="gender1">
              <FormControlLabel
                value="female"
                control={<Radio color="primary" />}
                label="Female"
              />
              <FormControlLabel
                value="male"
                control={<Radio color="primary" />}
                label="Male"
              />
              <FormControlLabel
                value="other"
                control={<Radio color="primary" />}
                label="Other"
              />
            </RadioGroup>
          </div>
          <div className={styles.userUpdatItem}>
            <Button
              variant="contained"
              color="primary"
              className={styles.BtnNewUser}
              onClick={sendData}
            >
              {sendDataUser === 6 ? (
                <Link to={{ pathname: "/user/11", data: newUser }}>Creat</Link>
              ) : (
                "creat"
              )}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewUser;
