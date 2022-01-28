import React from "react";
import styles from "./newProduct.module.css";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
} from "@material-ui/core";

const NewProduct = () => {
  return (
    <div className={styles.newProduct}>
      <h3>New Product</h3>
      <form>
        <div className={styles.newProductLeft}>
          <div className={styles.ProductUpdatItem}>
            <label>Image</label>
            <TextField type="file" variant="outlined" size="small" />
          </div>
          <div className={styles.ProductUpdatItem}>
            <label>Name</label>
            <TextField
              label="Name"
              type="text"
              variant="outlined"
              size="small"
            />
          </div>
          <div className={styles.ProductUpdatItem}>
            <label>Stock</label>
            <TextField
              label="Stock"
              type="text"
              variant="outlined"
              size="small"
            />
          </div>
          <div className={styles.ProductUpdatItem}>
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
          <Button
            variant="contained"
            color="primary"
            className={styles.BtnNewProduct}
          >
            Create
          </Button>
        </div>
        <div className={styles.newProductRight}></div>
      </form>
    </div>
  );
};

export default NewProduct;
