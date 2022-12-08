import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../imagenes/Imagen1.png";

const NavBar = () => {
  return (
    <div>
      <Navbar className="bg-dark fixed-top" expand="lg">
        <Container>
          <Navbar.Brand href="#home">

            <img src={logo} alt="logo" width="100" />

          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto color-nav">
              <Link className="nav-link text-white" to="/">Home</Link>
              <Link className="nav-link text-white" to="/destacados">Destacados</Link>
              <Link className="nav-link text-white" to="/contacto">Contactos</Link>
              <Link className="nav-link text-white" to="/favoritos">Favoritos</Link>
              <Link className="nav-link text-white" to="/tablaproducto">Productos</Link>
              <Link className="nav-link text-white" to="/login">Login/Registro</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;