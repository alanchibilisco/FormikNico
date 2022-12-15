import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import instance from "../../../api/axiosUsuarios";

const TablaUsuarios = () => {
  const [userList, setUserList] = useState([]);
  

  const getUsers = async (token) => {
    const config = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };
    try {
      const resp = await instance.get("/users", config);
      setUserDate(resp.data);
    } catch (error) {
        console.log(error.response.msg);
        alert("Error")
    }
  };

  useEffect(() => {
    const user_token = localStorage.getItem("token");
    if (user_token) {
      getUsers(user_token);
    }
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1 className="h2">Usuarios</h1>
      
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {userList.length > 0
            ? userList.map((user) => (
                
                  <tr key= {user._id} >
                    <td>{user._id} </td>
                    <td>{user.name} </td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                  </tr>

              ))
            : "No users"}
        </tbody>
      </Table>
    </div>
  );
};

export default TablaUsuarios;
