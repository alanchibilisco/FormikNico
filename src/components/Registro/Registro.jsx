import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Image } from 'react-bootstrap';
import logo from '../../assets/img/logo/Imagen1.png'
import facebook from '../../assets/img/social-icons/facebook-logo.webp'
import google from '../../assets/img/social-icons/google-logo.png';

const Registro = ({show, handleClose}) => {
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
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control placeholder="Enter name" />
                        </Form.Group>
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
                        <div className='d-grid gap-2'>
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
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="warning" onClick={handleClose}>
                        to accept
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default Registro
