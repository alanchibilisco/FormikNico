import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Spinner, Table } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import instance from "../../../api/axiosUsuarios";
import Swal from "sweetalert2";
import "boxicons";

const TablaUsuarios = () => {
  
  const [userList, setUserList] = useState([]);
  
  const getUsers = async (token) => {

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const resp = await instance.get("/users", config);
      setUserList(resp.data);
    } catch (error) {
      console.log(error);
      alert("Error");
    }
  };

  useEffect(() => {
    const user_token = localStorage.getItem("token");
    if (user_token) {
      getUsers(user_token);
    }
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Quieres borrar este Usuario?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Aceptar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const resp = await instance.delete(`/users/${id}`);
          if (resp.status === 200) {
            Swal.fire(
              "Borrado",
              "El Usuario se borro correctamente.",
              "success"
            );
            getUsers();
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  return (
    <Container className="py-5">
      <Row>
        <Col lg={6}>
        <h1 className="h2">Usuarios</h1>
        </Col>

        
        <Col lg={12}>
          <Table
            responsive
            striped
            bordered
            hover
            variant="dark"
            className="text-center align-middle"
          >
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {userList.length > 0
                ? userList.map((user) => (
                    <tr key={user._id}>
                      <td>{user._id} </td>
                      <td>{user.name} </td>
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                      <td>
                      <div className="d-flex justify-content-center">
                        <Button variant="outline-success mx-1">
                          <Link
                            to={`/edicionUsuario/${user._id}`}
                            variant="outline-primary mx-1"
                            style={{ color: "black" }}
                          >
                            <i className="fa-solid fa-pen-to-square"></i>
                          </Link>
                        </Button>
                        <Button
                          variant="outline-danger mx-1"
                          onClick={() => handleDelete(user._id)}
                        >
                          <i className="fa-solid fa-trash-can"></i>
                        </Button>
                      </div>
                      </td>
                      
                    </tr>
                  ))
                :
                <tr>
                  <td>
                  <Spinner color="warning" />
                </td>
                </tr>}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default TablaUsuarios;
