import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Navbar className="bg-dark" expand="lg">
        <Container>
          <Navbar.Brand className="logo text-white">
          <Link className="nav-link text-white" to="/">
          Taberna Mia
          </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto color-nav">
              <Link className="nav-link text-white" to="/">Home</Link>
              <Link className="nav-link text-white" to="/">Destacado</Link>
              <Link className="nav-link text-white" to="/contacto">Contactos</Link>
              <Link className="nav-link text-white" to="/tablaproducto">Productos</Link>
              <Link className="nav-link text-white" to="/login">Login</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;