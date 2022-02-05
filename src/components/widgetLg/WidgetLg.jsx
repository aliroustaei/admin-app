import React from "react";
import styles from "./widgetLg.module.css";
import { Avatar } from "@material-ui/core";

const WidgetLg = () => {
  const Button = ({ type }) => {
    return (
      <button className={`${styles.widgetLgButton} ${styles[type]}`}>
        {type}
      </button>
    );
  };

  return (
    <div className={styles.widgetLg}>
      <h3>Latest transactions</h3>
      <table className={styles.widgetLgTable}>
        <tbody>
          <tr>
            <th>Customer</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
          <tr>
            <td className={styles.widgetLgUser}>
              <Avatar />
              <p>Ali</p>
            </td>
            <td>2 Jun 2021</td>
            <td>$2,501</td>
            <td>
              <Button type="Approved" />
            </td>
          </tr>

          <tr>
            <td className={styles.widgetLgUser}>
              <Avatar />
              <p>Ali</p>
            </td>
            <td>2 Jun 2021</td>
            <td>$2,501</td>
            <td>
              <Button type="Approved" />
            </td>
          </tr>

          <tr>
            <td className={styles.widgetLgUser}>
              <Avatar />
              <p>Ali</p>
            </td>
            <td>2 Jun 2021</td>
            <td>$2,501</td>
            <td>
              <Button type="Declined" />
            </td>
          </tr>

          <tr>
            <td className={styles.widgetLgUser}>
              <Avatar />
              <p>Ali</p>
            </td>
            <td>2 Jun 2021</td>
            <td>$2,501</td>
            <td>
              <Button type="Pending" />
            </td>
          </tr>

          <tr>
            <td className={styles.widgetLgUser}>
              <Avatar />
              <p>Ali</p>
            </td>
            <td>2 Jun 2021</td>
            <td>$2,501</td>
            <td>
              <Button type="Declined" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WidgetLg;
