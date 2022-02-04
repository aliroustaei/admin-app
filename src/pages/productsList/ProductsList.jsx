import React, { useContext, useState } from "react";
//styles
import styles from "./productsList.module.css";
//material
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
//context
import { ProductsContext } from "../../context/ProductContextProvider";

const ProductsList = () => {
  const { products } = useContext(ProductsContext);
  const [data, setData] = useState(products);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },

    {
      field: "product",
      headerName: "Product",
      width: 240,
      renderCell: (params) => {
        return (
          <div className={styles.product}>
            <img src={params.row.image} alt="" />
            <p>{params.row.title}</p>
          </div>
        );
      },
    },

    {
      field: "category",
      headerName: "category",
      width: 160,
    },

    {
      field: "price",
      headerName: "Price",
      width: 160,
    },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      sortable: false,
      editable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className={styles.editBtn}>Edit</button>
            </Link>
            <DeleteOutline
              className={styles.deletBtn}
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className={styles.productsList}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default ProductsList;
