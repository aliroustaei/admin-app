import React, { useState } from "react";
import { productDataAdd } from "../../dummyData";
import { Link } from "react-router-dom";
//styles
import styles from "./product.module.css";
//material
import { Button } from "@material-ui/core";
import { Publish } from "@material-ui/icons";
import Chart from "../../components/charts/Chart";
import prewimage from "../../image/prewimage.png";

const ProductAdd = (props) => {
  const { data } = props.location;
  const [product, setProduct] = useState({ ...data, image: prewimage });
  const { title, description, price, rating, active, image } = product;

  //update
  const [update, setUpdate] = useState(product);

  const updateHandel = (e) => {
    if (e.target.name === "count") {
      setUpdate({
        ...update,
        rating: { [e.target.name]: e.target.value },
      });
    } else {
      setUpdate({ ...update, [e.target.name]: e.target.value });
    }
  };

  //
  const updateClick = () => {
    setProduct({ ...update, image: imageUrl });
  };

  //Show image
  const [imageUrl, setImageUrl] = useState();

  const PreviewImage = (e) => {
    var oFReader = new FileReader();
    oFReader.readAsDataURL(e.target.files[0]);
    oFReader.onload = function (e) {
      let src = e.target.result;
      setImageUrl(src);
    };
  };

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
              <img src={image} alt="" />
              <h4>{title}</h4>
            </div>
            <div className={styles.productBottomInfo}>
              <p>
                id: <span>21</span>
              </p>
              <p>
                price: <span>${price}</span>
              </p>
              <p>
                active: <span>{active}</span>
              </p>
              <p>
                stock: <span>{rating.count}</span>
              </p>
            </div>
          </div>
          <div>
            <h4>About this item</h4>
            <p>{description}</p>
          </div>
        </div>
        <div className={styles.productTopLeft}>
          <Chart
            data={productDataAdd}
            dataKey="Sales"
            title="Sales Performance"
          />
        </div>
      </div>
      <div className={styles.productBottom}>
        <form>
          <div className={styles.formLeft}>
            <div className={styles.formLeftItem}>
              <label>Product Name</label>
              <input type="text" name="title" onChange={updateHandel} />
            </div>
            <div className={styles.formLeftItem}>
              <label>Stock</label>
              <input type="text" name="count" onChange={updateHandel} />
            </div>
            <div className={styles.formLeftItem}>
              <label>Price</label>
              <input type="text" name="price" onChange={updateHandel} />
            </div>
            <div className={styles.formLeftItem}>
              <label>Active</label>
              <select name="active" id="" onChange={updateHandel}>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>
          <div className={styles.formRight}>
            <div className={styles.userUpdateImg}>
              <img src={imageUrl ? imageUrl : image} alt="" />
              <label htmlFor="file">
                <Publish />
              </label>
              <input type="file" id="file" onChange={PreviewImage} />
            </div>
            <div>
              <Button variant="contained" color="primary" onClick={updateClick}>
                Update
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductAdd;
