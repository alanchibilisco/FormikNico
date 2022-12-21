import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Spinner, Table } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import instance from "../../../api/axiosUsuarios";
import Swal from "sweetalert2";
// import "boxicons";

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
    const user_token = localStorage.getItem("token");
    console.log(user_token);
    const config = {
      headers: {
        Authorization: `Bearer ${user_token}`,
      },
    }
    Swal.fire({
      title: "Do you want to delete this user?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Accept",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const resp = await instance.delete(`/users/${id}`, config);
          if (resp.status === 200) {
            Swal.fire(
              "Deleted",
              "The user was successfully deleted.",
              "success"
            );
            getUsers(user_token);
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
      <h1 >User table</h1>
        <hr />
        
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
                            <i className="fa-solid fa-user-pen"></i>
                          </Link>
                        </Button>
                        <Button
                          variant="outline-danger mx-1"
                          onClick={() => handleDelete(user._id)}
                        >
                          <i className="fa-solid fa-user-xmark"></i>
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
