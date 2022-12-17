import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
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
      setUserList(resp.data);
    } catch (error) {
        console.log(error);
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
                    <div className="d-flex justify-content-center">
                      <Button variant="outline-success mx-1">
                        <Link to={`/edicionproducto/${user._id}`} variant="outline-primary mx-1" style={{color: 'black'}}>
                          <i className="fa-solid fa-pen-to-square"></i>
                        </Link>
                      </Button>
                      <Button variant="outline-danger mx-1" onClick={() => handleDelete(user._id)}>
                        <i className="fa-solid fa-trash-can"></i>
                      </Button>
                      </div>
                  </tr>

              ))
            : "No users"}
        </tbody>
      </Table>
    </div>
  );
};

export default TablaUsuarios;
