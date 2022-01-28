import React, { useState } from "react";
import styles from "./productsList.module.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import appleAirpod from "../../image/shopping.png";

const ProductsList = () => {
  const [data, setData] = useState(productRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },

    {
      field: "product",
      headerName: "Product",
      width: 180,
      renderCell: (params) => {
        return (
          <div className={styles.product}>
            <img src={appleAirpod} alt="" />
            <p>{params.row.name}</p>
          </div>
        );
      },
    },

    {
      field: "status",
      headerName: "Status",
      width: 140,
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
