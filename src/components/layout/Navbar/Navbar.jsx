import React, { useState } from 'react';
import { Container, Nav, Navbar, Button, Form, Col } from "react-bootstrap";
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { Link } from "react-router-dom";
import logo from "../../../imagenes/Imagen1.png";
import Login from '../../Login';



const NavBar = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="sticky-top" >
      <Navbar className="bg-dark" expand="lg">
        <Container fluid>
          <Navbar.Brand>
            <Link to='/'><img src={logo} alt="logo" width="100" /></Link>
          </Navbar.Brand>
          <div className=" text-center" xs={12} md={6} lg={4}>
              <a href="https://www.facebook.com/login/"
                className=" redes fa-brands fa-facebook text-decoration-none text-center mx-2 mt-2"
                target="_blank"></a>
              <a href="https://www.whatsapp.com/"
                className="fa-brands fa-whatsapp redes text-center text-decoration-none mx-2 mt-2"
                target="_blank"></a>
              <a href="https://www.youtube.com/"
                className="fa-brands fa-youtube redes text-center text-decoration-none mx-2 mt-2"
                target="_blank"></a>
              <a href="https://www.instagram.com/accounts/login/?"
                className="fa-brands fa-instagram redes text-center text-decoration-none mx-2 mt-2"
                target="_blank"></a>
            </div>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="warning">Search</Button>
          </Form>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto color-nav">
              <Link className="nav-link text-white" to="/">Home</Link>
              <Link className="nav-link text-white" to="/destacados">Destacados</Link>
              <Link className="nav-link text-white" to="/contacto">Contactos</Link>
              <Link className="nav-link text-white" to="/favoritos">Favoritos</Link>
              <Link className="nav-link text-white" to="/tablaproducto">Productos</Link>
              <Button variant="warning" onClick={handleShow}>
                Login
              </Button>
              <Col className=''>
                <Button className=''>
                  carrito</Button>
                <Button>?</Button>
              </Col>

              <Login show={show} handleClose={handleClose} />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;