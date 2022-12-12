import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Image } from 'react-bootstrap';
import logo from '../../assets/img/logo/Imagen1.png'
import facebook from '../../assets/img/social-icons/facebook-logo.webp'
import google from '../../assets/img/social-icons/google-logo.png';
import { Link } from 'react-router-dom';
import Registro from '../Registro/Registro';

const Login = ({ show, handleClose }) => {
  const [reg, setReg] = useState(false);
  const handleCloses = () => setReg(false);
  const handleShow = () => setReg(true);
  return (
    <Modal show={show} onHide={handleClose} backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title className='d-flex'>
          <Image src={logo} alt="logo" width="40" />
          Login
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
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

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <div className='d-grid gap-2'>
            <Button variant="warning" type="submit">
              Sign in
            </Button>
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
                onClick={handleShow} onHide={handleCloses} >
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
