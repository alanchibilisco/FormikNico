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
      navigate("/")
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
    <div className="sticky-top">
      <Navbar className="bg-dark text-center" expand="lg">
        <Container fluid>
          <Navbar.Brand>
            <Link to="/">
              <img src={logo} alt="logo" width="100" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-warning'/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="Navbar me-auto color-nav">
              {
                (token) ? 
                  role == "admin" ? 
                  (<>
                  <NavLink className="nav-link text-white mx-1" style={({ isActive }) => isActive ? activeStyle : undefined} to="/"><i className="fa-solid fa-house"></i> Home</NavLink>
                  <NavLink className="nav-link text-white mx-1" style={({ isActive }) => isActive ? activeStyle : undefined} to="/tablausuarios"><i className="fa-solid fa-lock"></i> ABM Users</NavLink>
                  <NavLink className="nav-link text-white mx-1" style={({ isActive }) => isActive ? activeStyle : undefined} to="/tablaproducto"><i className="fa-solid fa-lock"></i> ABM Products</NavLink>
                    <NavLink className="nav-link text-white mx-1" style={({ isActive }) => isActive ? activeStyle : undefined} to="/contacto"><i className="fa-solid fa-users"></i> Contact</NavLink>
                    <NavLink className="nav-link text-white mx-1" style={({ isActive }) => isActive ? activeStyle : undefined} to="/favoritos"><i className="fa-solid fa-heart"></i> Favorites</NavLink>
                    <NavLink className="nav-link text-white mx-1" style={({ isActive }) => isActive ? activeStyle : undefined} to="/productpage"><i className="fa-solid fa-beer-mug-empty"></i> Featured</NavLink>
          
                    <Button onClick={handleLogout} variant="danger"><i className="fa-solid fa-person-running"></i> Logout</Button>
                  </>
                    
                  )
                  :
                  <>
                    <NavLink className="nav-link text-white mx-1" style={({ isActive }) => isActive ? activeStyle : undefined} to="/"><i className="fa-solid fa-house"></i> Home</NavLink>
                    <NavLink className="nav-link text-white mx-1" style={({ isActive }) => isActive ? activeStyle : undefined} to="/contacto"><i className="fa-solid fa-users"></i> Contact</NavLink>
                    <NavLink className="nav-link text-white mx-1" style={({ isActive }) => isActive ? activeStyle : undefined} to="/favoritos"><i className="fa-solid fa-heart"></i> Favorites</NavLink>
                    <NavLink className="nav-link text-white mx-1" style={({ isActive }) => isActive ? activeStyle : undefined} to="/productpage"><i className="fa-solid fa-beer-mug-empty"></i> Featured</NavLink>
                
                    <Button onClick={handleLogout} variant="danger"><i className="fa-solid fa-person-running"></i> Logout</Button>
                  </>
                
                  :
                  (
                    <>
                      <NavLink className="nav-link text-white mx-1 btnTest" style={({ isActive }) => isActive ? activeStyle : undefined} to="/"><i className="fa-solid fa-house"></i> Home</NavLink>
                      <Button variant="warning" onClick={handleShow}>
                      <i className="fa-solid fa-right-to-bracket"></i> Login
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