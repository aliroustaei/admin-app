import React from "react";
import styles from "./widgetSm.module.css";
import { Avatar, Button } from "@material-ui/core";
import { Visibility } from "@material-ui/icons";

const data = [
  { name: "Reza Mohammadi", img: "", city: "Tehran" },
  { name: "Negin Amini", img: "", city: "Tehran" },
  { name: "Ali Roustaei", img: "", city: "Shiraz" },
  { name: "Mina Elhami", img: "", city: "Tehran" },
  { name: "Arash Bahrami", img: "", city: "Tabriz" },
];

const WidgetSm = () => {
  return (
    <div className={styles.widgetSm}>
      <h3>New Members</h3>
      {data.map((data) => (
        <div className={styles.membersBox} key={data.name}>
          <Avatar alt={data.name} src={data.img} />
          <div className={styles.membersInfo}>
            <p>{data.name}</p>
            <span>{data.city}</span>
          </div>
          <Button
            color="inherit"
            startIcon={<Visibility />}
            className={styles.membersBtn}
          >
            Display
          </Button>
        </div>
      ))}
    </div>
  );
};

export default WidgetSm;
