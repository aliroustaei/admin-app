import React from "react";
import Chart from "../../components/charts/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import { userData } from "../../dummyData";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" dataKey="Active User" />
      <div className={styles.widget}>
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
