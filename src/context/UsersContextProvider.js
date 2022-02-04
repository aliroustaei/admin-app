import React, { createContext, useEffect, useState } from "react";

//API
import { getUsers } from "../services/api";

export const UsersContext = createContext();

const UsersContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setUsers(await getUsers());
    };
    fetchAPI();
  }, []);

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContextProvider;
