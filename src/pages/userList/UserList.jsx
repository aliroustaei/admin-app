import React, { useContext, useState } from "react";
import styles from "./userList.module.css";
import { DataGrid } from "@material-ui/data-grid";
import { Avatar } from "@material-ui/core";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
//context
import { UsersContext } from "../../context/UsersContextProvider";

const UserList = () => {
  const { users } = useContext(UsersContext);
  const [data, setData] = useState(users);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },

    {
      field: "name",
      headerName: "User",
      width: 180,
      renderCell: (params) => {
        return (
          <div className={styles.userName}>
            <Avatar
              alt={params.row.name.firstname}
              src={params.row.name.firstname}
            />
            <p>
              {params.row.name.firstname} {params.row.name.lastname}
            </p>
          </div>
        );
      },
    },

    { field: "email", headerName: "Email", width: 200 },

    {
      field: "password",
      headerName: "Password",
      width: 140,
    },

    {
      field: "phone",
      headerName: "Phone",
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
