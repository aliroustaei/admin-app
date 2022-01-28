import React, { useState } from "react";
import styles from "./userList.module.css";
import { DataGrid } from "@material-ui/data-grid";
import { Avatar } from "@material-ui/core";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";

const UserList = () => {
  const [data, setData] = useState(userRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },

    {
      field: "user",
      headerName: "User",
      width: 180,
      renderCell: (params) => {
        return (
          <div className={styles.userName}>
            <Avatar alt={params.row.Avatar} src={params.row.Avatar} />
            <p>{params.row.Name}</p>
          </div>
        );
      },
    },

    { field: "Email", headerName: "Email", width: 200 },

    {
      field: "Status",
      headerName: "Status",
      width: 140,
    },

    {
      field: "Transaction",
      headerName: "Transaction Volume",
      width: 160,
    },

    {
      field: "Action",
      headerName: "Action",
      width: 150,
      sortable: false,
      editable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
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
    <div className={styles.userList}>
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

export default UserList;
