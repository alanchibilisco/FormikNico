import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Image } from 'react-bootstrap';
import logo from '../../assets/img/logo/Imagen1.png'
import facebook from '../../assets/img/social-icons/facebook-logo.webp'
import google from '../../assets/img/social-icons/google-logo.png';
import { Link, useNavigate } from 'react-router-dom';
import Registro from '../../components/Registro/Registro';
import instance from '../../api/axiosUsuarios';
import Swal from 'sweetalert2';
import { validateEmail, validatePassword } from '../helpers/validateFields';

const Login = ({ show, handleClose , setUserDate}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const [reg, setReg] = useState(false);
  const handleCloses = () => setReg(false);
  const handleShow = () => setReg(true);

  const handleSubmit = async(e) => {
    e.preventDefault()
    console.log("testing")
    if (validateEmail(email) && (validatePassword(password))) {
      const user = {
        email,
        password,
      }
      try {
        const res = await instance.post("/auth/login", user);
        const user_token = res.data.token;
        localStorage.setItem("token", user_token);
        setUserDate(user_token);
        window.location.reload();
        Swal.fire({
              icon: 'success',
              title: 'Bienvenido!',
              text: 'Ahora estas logeado!'
            })
            setTimeout(() =>{
              handleClose();
              navigate("/") 
            },1000)

      } catch (error) {
        Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Email o Password incorrectos!'
              })
        console.log(error);
      }
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debe ingresar Email y contraseña!'
      })
      console.log(error);
    }
  };


  return (
    <Modal show={show} onHide={handleClose} backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title className='d-flex'>
          <Image src={logo} alt="logo" width="40" />
          Login
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" name='email' value={email} onChange={({target})=> setEmail(target.value)} maxLength={50} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter your password" value={password} onChange={({target})=> setPassword(target.value)} maxLength={30} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <div className='d-grid gap-2'>
            <Button variant="warning" type="submit">Sign in</Button>
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
                to="/"
                data-toggle="modal"
                data-target="#exampleModal"
                className="font-weight-bold text-decoration-none"
                onClick={handleShow}  >
                sign up
              </Link>
              <Registro show={reg} handleClose={handleCloses} />
            </span>
          </div>
        </div>

        <div className="container my-3 w-100">
          <div className="row text-center">
            <h3 className="col-12">Sign in with</h3>
          </div>
          <div className="row justify-content-center">

            <div className="d-flex">
              <Button variant="outline-info" className=" w-100 my-1 mx-2">
                <a
                  href="https://www.facebook.com/login/"
                  className="text-decoration-none text-dark"
                  target="_blank"
                >
                  <div className=" row align-content-center">

                    <div className="col-2 d-none d-md-block">
                      <Image src={facebook} className="mx-3" width="30" alt="facebook" />
                    </div>
                    <div className="col-12 col-md-10 text-center font-weight-bolder">
                      Facebook
                    </div>
                  </div>
                </a>
              </Button>


              <Button variant="outline-warning" className=" w-100 my-1 mx-2">
                <a
                  href="https://www.google.com/"
                  className="text-decoration-none text-dark"
                  target="_blank"
                >
                  <div className=" row align-content-center">

                    <div className="col-2 d-none d-md-block">
                      <Image src={google} className="mx-3" width="30" alt="google" />
                    </div>
                    <div className="col-12 col-md-10 text-center font-weight-bolder">
                      Google
                    </div>
                  </div>
                </a>
              </Button>

            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Login;
