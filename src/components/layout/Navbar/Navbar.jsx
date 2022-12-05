import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Navbar className="bg-yellow" expand="lg">
        <Container>
          <Navbar.Brand className="logo" href="/">
            Taberna Mia
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto color-nav">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/tablaproducto">Productos</Link>
              <Link className="nav-link" to="/login">Login</Link>
              <Link className="nav-link" to="/sobrenosotros">Sobre Nosotros</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;