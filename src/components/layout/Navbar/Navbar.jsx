import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css"
import logo from "../../../assets/img/logo/Imagen1.png";
import Login from '../../Login';
import { jwtDecoded } from '../../helpers/Jwt';

let token = localStorage.getItem("token") || false

const NavBar = ({ setUserDate }) => {
  const navigate = useNavigate()
  const [show, setShow] = useState(false);
  const [role, setRole] = useState(null);

  const handleClose = () => setShow(false);
  const handleLogout = () => {
    localStorage.removeItem("token") ;
    setRole(null
      );
      setUserDate("");
      window.location.reload();
    token = false;

  };
  const handleShow = () => setShow(true);
 

  let activeStyle = {
    backgroundColor: "rgb(246, 181, 1)",
    borderRadius: "8px",
    fontWeight: "bolder",
  }

  useEffect(() => {
  
    if (token != null) {
      setRole(jwtDecoded(token));
    }
   
  }, [])
  


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
                (token) ? 
                  role == "admin" ? 
                  (<>
                  <NavLink className="nav-link text-white mx-1" style={({ isActive }) => isActive ? activeStyle : undefined} to="/tablausuarios">ABM Usuarios</NavLink>
                  <NavLink className="nav-link text-white mx-1" style={({ isActive }) => isActive ? activeStyle : undefined} to="/tablaproducto">ABM productos</NavLink>
                  <NavLink className="nav-link text-white mx-1" style={({ isActive }) => isActive ? activeStyle : undefined} to="/">Home</NavLink>
                    <NavLink className="nav-link text-white mx-1" style={({ isActive }) => isActive ? activeStyle : undefined} to="/destacados">Destacados</NavLink>
                    <NavLink className="nav-link text-white mx-1" style={({ isActive }) => isActive ? activeStyle : undefined} to="/contacto">Contacto</NavLink>
                    <NavLink className="nav-link text-white mx-1" style={({ isActive }) => isActive ? activeStyle : undefined} to="/favoritos">Favoritos</NavLink>
                    <NavLink className="nav-link text-white mx-1" style={({ isActive }) => isActive ? activeStyle : undefined} to="/productpage">Productos</NavLink>
                    
                    <div className="text-end">
                    <Nav.Link onClick={handleLogout} className="text-white">
                      Logout
                    </Nav.Link>
                    </div>
                  </>
                    
                  )
                  :
                  <>
                    <NavLink className="nav-link text-white mx-1" style={({ isActive }) => isActive ? activeStyle : undefined} to="/">Home</NavLink>
                    <NavLink className="nav-link text-white mx-1" style={({ isActive }) => isActive ? activeStyle : undefined} to="/destacados">Destacados</NavLink>
                    <NavLink className="nav-link text-white mx-1" style={({ isActive }) => isActive ? activeStyle : undefined} to="/contacto">Contacto</NavLink>
                    <NavLink className="nav-link text-white mx-1" style={({ isActive }) => isActive ? activeStyle : undefined} to="/favoritos">Favoritos</NavLink>
                    <NavLink className="nav-link text-white mx-1" style={({ isActive }) => isActive ? activeStyle : undefined} to="/productpage">Productos</NavLink>
                    
                    <div className="text-end">
                    
                    <Nav.Link onClick={handleLogout} className="text-white">
                      Logout
                    </Nav.Link>
                    </div>
                  </>
                
                  :
                  (
                    <>
                      <NavLink className="nav-link text-white mx-1" style={({ isActive }) => isActive ? activeStyle : undefined} to="/">Home</NavLink>
                      <Button variant="warning" onClick={handleShow}>
                        Login
                      </Button>
                      <Login show={show} handleClose={handleClose} setUserDate={setUserDate} />
                    </>
                  )
              }
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;