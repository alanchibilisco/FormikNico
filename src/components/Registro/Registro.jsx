import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Image } from 'react-bootstrap';
import logo from '../../assets/img/logo/Imagen1.png'
import facebook from '../../assets/img/social-icons/facebook-logo.webp'
import google from '../../assets/img/social-icons/google-logo.png';
import instance from "../../api/axiosUsuarios"
import { validateEmail, validatePassword } from '../helpers/validateFields';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Registro = ({show, handleClose}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault()
    console.log("testing")
    if (validateEmail(email) && (validatePassword(password))) {
      const user = {
        name,
        email,
        password
      }
      try {
        const res = await instance.post("/auth/register", user)
        console.log(res);
        const user_token = res.data.token
        localStorage.setItem("token", user_token)
        Swal.fire({
              icon: 'success',
              title: 'Bienvenido!',
              text: 'Now you are registred!'
            })
            setTimeout(() =>{
              handleClose();
              navigate("/") 
            },1000)

      } catch (error) {
        Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Email or password incorrects!'
              })
        console.log(error);
      }
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'All the fields are required!'
      })
      console.log(error);
    }
  };

  
    //hacer conexion con el back y enviar name email y password
    return (
        <>
            <Modal show={show} onHide={handleClose} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>
                    <Image src={logo} alt="logo" width="40" />
                        Register
                        </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control placeholder="Enter name" onChange={({target})=> setName(target.value)} maxLength={50}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" name='email' value={email} onChange={({target})=> setEmail(target.value)} maxLength={50} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter your password" value={password} onChange={({target})=> setPassword(target.value)} maxLength={30} />
                        </Form.Group>
                        <div className='d-grid gap-2 my-2'>
                            <Button variant="warning" type="submit">
                                Sign in
                            </Button>
                        </div>
                    </Form>
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
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default Registro
