import React, { useContext, useState } from "react";
import axios from "axios";
import { productData } from "../../dummyData";
//styles
import styles from "./product.module.css";
//material
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { Publish } from "@material-ui/icons";
import Chart from "../../components/charts/Chart";
//context
import { ProductsContext } from "../../context/ProductContextProvider";

const Product = (props) => {
  const { products } = useContext(ProductsContext);
  const id = props.match.params.id;
  const [product, setProduct] = useState(
    products.find((item) => (item.id = id))
  );
  const { image, title, description, price } = product;

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

  //update database
  const updateClick = () => {
    axios
      .patch(`https://fakestoreapi.com/products/${id}`, update)
      .then((response) => {
        const data = response.data;
        setProduct(data);
        setProduct({ ...data, image: imageUrl });
      })
      .catch((err) => alert("An error occurred Try again"));
  };

  //Show image
  const [imageUrl, setImageUrl] = useState();

  const funcImg = (e) => {
    PreviewImage(e);
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
                id: <span>{id}</span>
              </p>
              <p>
                price: <span>${price}</span>
              </p>
              <p>
                active: <span>yes</span>
              </p>
              <p>
                stocke: <span>120</span>
              </p>
            </div>
          </div>
          <div>
            <h4>About this item</h4>
            <p>{description}</p>
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
              <input type="text" name="title" onChange={updateHandel} />
            </div>
            <div className={styles.formLeftItem}>
              <label>Price</label>
              <input type="text" name="price" onChange={updateHandel} />
            </div>
            <div className={styles.formLeftItem}>
              <label>Description</label>
              <textarea
                name="description"
                cols="30"
                rows="10"
                onChange={updateHandel}
              ></textarea>
            </div>
          </div>
          <div className={styles.formRight}>
            <div className={styles.userUpdateImg}>
              <img src={imageUrl ? imageUrl : image} alt="" />
              <label htmlFor="file">
                <Publish />
              </label>
              <input type="file" id="file" onChange={funcImg} />
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

export default Product;
