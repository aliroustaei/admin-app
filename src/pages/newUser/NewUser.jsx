import React from "react";
import styles from "./newUser.module.css";
import {
  TextField,
  RadioGroup,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Radio,
  FormControlLabel,
  Button,
} from "@material-ui/core";

const NewUser = () => {
  return (
    <div className={styles.newUser}>
      <h3>New User</h3>
      <form>
        <div className={styles.newUserLeft}>
          <div className={styles.userUpdatItem}>
            <label>User name</label>
            <TextField
              label="Username"
              type="text"
              variant="outlined"
              size="small"
            />
          </div>
          <div className={styles.userUpdatItem}>
            <label>Full Name</label>
            <TextField
              label="Full Name"
              type="text"
              variant="outlined"
              size="small"
            />
          </div>
          <div className={styles.userUpdatItem}>
            <label>Email</label>
            <TextField
              label="Email"
              type="Email"
              variant="outlined"
              size="small"
            />
          </div>
          <div className={styles.userUpdatItem}>
            <label>Password</label>
            <TextField
              label="Password"
              type="Password"
              variant="outlined"
              size="small"
            />
          </div>
          <div className={styles.userUpdatItem}>
            <label>Phone</label>
            <TextField
              label="Phone"
              type="text"
              variant="outlined"
              size="small"
            />
          </div>
          <div className={styles.userUpdatItem}>
            <label>Address</label>
            <TextField
              label="Address"
              type="text"
              variant="outlined"
              size="small"
            />
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
            <label>Active</label>
            <FormControl variant="outlined" size="small">
              <InputLabel id="demo-simple-select-outlined-label">
                Active
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                label="Active"
              >
                <MenuItem value={10}>Yes</MenuItem>
                <MenuItem value={20}>No</MenuItem>
              </Select>
            </FormControl>
            <Button
              variant="contained"
              color="primary"
              className={styles.BtnNewUser}
            >
              Create
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewUser;
