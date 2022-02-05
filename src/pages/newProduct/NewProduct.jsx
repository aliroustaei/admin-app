import React, { useState } from "react";
import { Link } from "react-router-dom";
//styles
import styles from "./newProduct.module.css";
//material
import { Button } from "@material-ui/core";

const NewProduct = () => {
  const [newProduct, setNewProduct] = useState({ title: "" });
  let sendDataProduct = Object.keys(newProduct).length;

  const newProductHandle = (e) => {
    if (e.target.name === "count") {
      setNewProduct({
        ...newProduct,
        rating: { [e.target.name]: e.target.value },
      });
    } else {
      setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
    }
  };

  const sendData = () => {
    if (sendDataProduct <= 4) {
      alert("please enter data");
    }
  };

  //Show image
  const [imageUrl, setImageUrl] = useState();

  const funcImg = (e) => {
    PreviewImage(e);
    newProductHandle(e);
  };

  const PreviewImage = (e) => {
    var oFReader = new FileReader();
    oFReader.readAsDataURL(e.target.files[0]);
    oFReader.onload = function (e) {
      let src = e.target.result;
      setImageUrl(src);
    };
  };

  return (
    <div className={styles.newProduct}>
      <h3>New Product</h3>
      <form>
        <div className={styles.newProductLeft}>
          <div className={styles.ProductUpdatItem}>
            <label>Image</label>
            <input
              type="file"
              name="image"
              accept=".jpg,.jpeg,.png,"
              onChange={funcImg}
            />
          </div>
          <div className={styles.ProductUpdatItem}>
            <label>Name</label>
            <input type="text" name="title" onChange={newProductHandle} />
          </div>
          <div className={styles.ProductUpdatItem}>
            <label>Price</label>
            <input type="text" name="price" onChange={newProductHandle} />
          </div>
          <div className={styles.ProductUpdatItem}>
            <label>Stock</label>
            <input type="text" name="count" onChange={newProductHandle} />
          </div>
          <div className={styles.ProductUpdatItem}>
            <label>Description</label>
            <textarea
              name="description"
              id=""
              cols="30"
              rows="10"
              onChange={newProductHandle}
            ></textarea>
          </div>
          <div className={styles.ProductUpdatItem}>
            <label>Active</label>
            <select name="active" id="" onChange={newProductHandle}>
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>
          </div>

          <Button
            variant="contained"
            color="primary"
            className={styles.BtnNewProduct}
            onClick={sendData}
          >
            {sendDataProduct > 5 ? (
              <Link to={{ pathname: "/product/21", data: newProduct }}>
                Creat
              </Link>
            ) : (
              "creat"
            )}
          </Button>
        </div>
        <div className={styles.newProductRight}>
          <img src={imageUrl} alt="" />
        </div>
      </form>
    </div>
  );
};

export default NewProduct;
