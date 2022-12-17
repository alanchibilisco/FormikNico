import React, { useState } from 'react';
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css"
import logo from "../../../assets/img/logo/Imagen1.png";
import Login from '../../Login';

const NavBar = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let activeStyle = {
    backgroundColor: "rgb(246, 181, 1)",
    borderRadius: "8px",
    fontWeight: "bolder",
  }

  let token = localStorage.getItem("token") || false


  return (
    <div className="sticky-top" >
      <Navbar className="bg-dark text-center" expand="lg">
        <Container fluid>
          <Navbar.Brand>
            <Link to='/'><img src={logo} alt="logo" width="100" /></Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="Navbar me-auto color-nav">
              {
                (token) ? (
                  <>
                    <NavLink className="nav-link text-white mx-1" style={({ isActive }) => isActive ? activeStyle : undefined} to="/">Home</NavLink>
                    <NavLink className="nav-link text-white mx-1" style={({ isActive }) => isActive ? activeStyle : undefined} to="/destacados">Destacados</NavLink>
                    <NavLink className="nav-link text-white mx-1" style={({ isActive }) => isActive ? activeStyle : undefined} to="/contacto">Contacto</NavLink>
                    <NavLink className="nav-link text-white mx-1" style={({ isActive }) => isActive ? activeStyle : undefined} to="/favoritos">Favoritos</NavLink>
                    <NavLink className="nav-link text-white mx-1" style={({ isActive }) => isActive ? activeStyle : undefined} to="/productpage">Productos</NavLink>
                    <NavLink className="nav-link text-white mx-1" style={({ isActive }) => isActive ? activeStyle : undefined} to="/tablaproducto">ABM productos</NavLink>
                    <div className="text-end">
                    <NavLink className="nav-link text-white mx-1" style={({ isActive }) => isActive ? activeStyle : undefined} to="/tablausuarios">ABM Usuarios</NavLink>
                    <Nav.Link onClick={handleClose} className="text-white">
                      Logout
                    </Nav.Link>
                    </div>
                    {console.log("estoy en el if")}
                  </>
                )
                  :
                  (
                    <>
                    {console.log("estoy en el else")}
                      <NavLink className="nav-link text-white mx-1" style={({ isActive }) => isActive ? activeStyle : undefined} to="/">Home</NavLink>
                      {/* <NavLink className="nav-link text-white mx-1" style={({ isActive }) => isActive ? activeStyle : undefined} to="/destacados">Destacados</NavLink>
                      <NavLink className="nav-link text-white mx-1" style={({ isActive }) => isActive ? activeStyle : undefined} to="/contacto">Contacto</NavLink>
                      <NavLink className="nav-link text-white mx-1" style={({ isActive }) => isActive ? activeStyle : undefined} to="/favoritos">Favoritos</NavLink>
                      <NavLink className="nav-link text-white mx-1" style={({ isActive }) => isActive ? activeStyle : undefined} to="/productpage">Productos</NavLink> */}
                      <Button variant="warning" onClick={handleShow}>
                        Login
                      </Button>
                      <Login show={show} handleClose={handleClose} />
                    </>
                  )
              }
              {/* <NavLink className="nav-link text-white mx-1" style={({ isActive }) => isActive ? activeStyle : undefined} to="/">Home</NavLink>
              <NavLink className="nav-link text-white mx-1" style={({ isActive }) => isActive ? activeStyle : undefined} to="/destacados">Destacados</NavLink>
              <NavLink className="nav-link text-white mx-1" style={({ isActive }) => isActive ? activeStyle : undefined} to="/contacto">Contacto</NavLink>
              <NavLink className="nav-link text-white mx-1" style={({ isActive }) => isActive ? activeStyle : undefined} to="/favoritos">Favoritos</NavLink>
              <NavLink className="nav-link text-white mx-1" style={({ isActive }) => isActive ? activeStyle : undefined} to="/productpage">Productos</NavLink>
              <NavLink className="nav-link text-white mx-1" style={({ isActive }) => isActive ? activeStyle : undefined} to="/tablaproducto">ABM productos</NavLink>
              <Button variant="warning" onClick={handleShow}>
                Login
              </Button>
              <Login show={show} handleClose={handleClose} /> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;