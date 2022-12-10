import React, { useState } from 'react';
import { Container, Nav, Navbar, Button, Modal, Form, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../imagenes/Imagen1.png";
import google from "../../../assets/img/google-logo.png"
import facebook from "../../../assets/img/facebook-logo.webp"


const NavBar = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="sticky-top">
      <Navbar className="bg-dark" expand="lg">
        <Container>
          <Navbar.Brand>

            <Link to='/'><img src={logo} alt="logo" width="100" /></Link>

          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto color-nav">
              <Link className="nav-link text-white" to="/">Home</Link>
              <Link className="nav-link text-white" to="/destacados">Destacados</Link>
              <Link className="nav-link text-white" to="/contacto">Contactos</Link>
              <Link className="nav-link text-white" to="/favoritos">Favoritos</Link>
              <Link className="nav-link text-white" to="/tablaproducto">Productos</Link>
              {/* <Link className="nav-link text-white" to="/login">Login/Registro</Link> */}
              <Button variant="warning" onClick={handleShow}>
                Login
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title className='d-flex'>
            <Image src={logo} alt="logo" width="40" />
            Login
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <div className='d-grid gap-2'>
              <Button variant="warning" type="submit">
                Sign in
              </Button>
            </div>
          </Form>
          <div className="d-flex justify-content-between my-3">
            <div>
              <span>
                <Link
                  to="/recpassword"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  className="font-weight-bold text-decoration-none"
                  onClick={handleClose}>
                  Recover password
                </Link>
              </span>
            </div>
            <div>
              <span>
                Don't have an account?{" "}
                <Link
                  to="/registro"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  className="font-weight-bold text-decoration-none"
                  onClick={handleClose}>
                  sign up
                </Link>
              </span>
            </div>
          </div>

          <div className="container my-3 w-100">
            <div className="row text-center">
              <h3 className="col-12">Sign in with</h3>
            </div>
            <div className="row justify-content-center">
              {/* <!--Row para organizar 2 botones--> */}
              <div className="d-flex">
                <Button variant="outline-info" className=" w-100 my-1 mx-2">
                  <a
                    href="https://www.facebook.com/login/"
                    className="text-decoration-none text-dark"
                    target="_blank"
                  >
                    <div className=" row align-content-center">
                      {/* <!--Row para alinear img y texto--> */}
                      <div className="col-2 d-none d-md-block">
                        <Image src={facebook} className="mx-3" width="30" alt="facebook" />
                      </div>
                      <div className="col-12 col-md-10 text-center font-weight-bolder">
                        Facebook
                      </div>
                    </div>
                  </a>
                </Button>
                {/* <!--Final de Primer Boton--> */}

                <Button variant="outline-warning" className=" w-100 my-1 mx-2">
                  <a
                    href="https://www.google.com/"
                    className="text-decoration-none text-dark"
                    target="_blank"
                  >
                    <div className=" row align-content-center">
                      {/* <!--Row para alinear img y texto--> */}
                      <div className="col-2 d-none d-md-block">
                        <Image src={google} className="mx-3" width="30" alt="google" />
                      </div>
                      <div className="col-12 col-md-10 text-center font-weight-bolder">
                        Google
                      </div>
                    </div>
                  </a>
                </Button>
                {/* <!--Final de Segundo Boton--> */}
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>

    
  );
};

export default NavBar;