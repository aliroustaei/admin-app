import React from "react";
import styles from "./product.module.css";
import { productData } from "../../dummyData";
import { Link } from "react-router-dom";
import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { Publish } from "@material-ui/icons";
import Chart from "../../components/charts/Chart";
import appleAirpod from "../../image/shopping.png";

const Product = () => {
  return (
    <div className={styles.product}>
      <div className={styles.productTitle}>
        <h3>Product</h3>
        <Link to="/newproduct">
          <Button variant="contained" color="primary">
            Create
          </Button>
        </Link>
      </div>
      <div className={styles.productTop}>
        <div className={styles.productTopRight}>
          <div>
            <div className={styles.productTopInfo}>
              <img src={appleAirpod} alt="" />
              <h4>Apple Airpod</h4>
            </div>
            <div className={styles.productBottomInfo}>
              <p>
                id: <span>12</span>
              </p>
              <p>
                sales: <span>152</span>
              </p>
              <p>
                active: <span>yes</span>
              </p>
              <p>
                in stocke: <span>no</span>
              </p>
            </div>
          </div>
          <div>
            <h4>About this item</h4>
            <p>
              Quick access to Siri by saying “ Hey Siri ” More than 24 hours
              total listening time with the Charging Case Effortless setup,
              in-ear detection, and automatic switching for a magical experience
              Easily share audio between two sets of AirPods on your iPhone,
              iPad, iPod touch, or Apple TV
            </p>
          </div>
        </div>
        <div className={styles.productTopLeft}>
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </div>
      </div>
      <div className={styles.productBottom}>
        <form>
          <div className={styles.formLeft}>
            <div className={styles.formLeftItem}>
              <label>Product Name</label>
              <TextField
                label="Product Name"
                type="text"
                variant="outlined"
                size="small"
              />
            </div>
            <div className={styles.formLeftItem}>
              <label>In Stock</label>
              <FormControl variant="outlined" size="small">
                <InputLabel id="demo-simple-select-outlined-label">
                  In Stock
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  label="In Stock"
                >
                  <MenuItem value={10}>Yes</MenuItem>
                  <MenuItem value={20}>No</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className={styles.formLeftItem}>
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
            </div>
          </div>
          <div className={styles.formRight}>
            <div className={styles.userUpdateImg}>
              <img src={appleAirpod} alt="" />
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
  );
};

export default Product;
