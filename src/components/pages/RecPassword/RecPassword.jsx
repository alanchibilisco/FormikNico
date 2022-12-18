import React, { useState } from 'react'
import { Col, Container, Button, Row, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import instance from '../../../api/axiosUsuarios';
import { validateEmail } from '../../helpers/validateFields';



const RecPassword = (props) => {
  props.funcNav(true)

  const [email, setEmail] = useState("");

  const navigate = useNavigate()


  const handleSubmit = async(e) => {
    e.preventDefault()
    console.log("testing")
    if (validateEmail(email)) {
      const user = {
        email
      }
      try {
        const res = await instance.post("/auth/recovery-password", user);
        const user_token = res.data.token;
        localStorage.setItem("token", user_token);
        setUserDate(user_token);
        window.location.reload();
        Swal.fire({
              icon: 'success',
              title: 'Ok!',
              text: 'You will receive an email to your email to make the changes!'
            })
            // setTimeout(() =>{
            //   handleClose();
            //   navigate("/") 
            // },1000)
            // navigate("/") 
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Email is required!'
        })
        return console.log(error);
      }
    }
    // else{
    //   Swal.fire({
    //     icon: 'error',
    //     title: 'Oops...',
    //     text: 'Email is required!'
    //   })
    //   console.log(error);
    // }
  };


  return (
    <>
      <Container>
        <Row className='my-5'>
          <h4 className=''>Recover your password</h4>
          <hr />
          <Col>
          <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" name='email' value={email} onChange={({target})=> setEmail(target.value)} maxLength={50} />
          </Form.Group>

          <div className='d-grid gap-2'>
            <Button variant="warning" type="submit">Send</Button>
          </div>
        </Form>
          </Col>
          <Col>2 of 2</Col>
        </Row>
      </Container>
    </>
  )
}

export default RecPassword