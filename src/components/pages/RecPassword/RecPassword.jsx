import React, { useState } from 'react';
import { Col, Container, Row,Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import logo from "../../../assets/img/logo/Imagen1.png";
import CartelBeer from "../../../image/CartelBeer.jpeg"
import Swal from 'sweetalert2';
import instance from "../../../api/axiosUsuarios"
import { validateEmail} from "../../helpers/validateFields"




const RecPassword = (props) => {
  props.funcNav(true)

  const [email, setEmail] = useState("");

  const navigate = useNavigate()

  const handleSubmit = async (e) =>{
      e.preventDefault()
      if (validateEmail(email)) {
        const user = { email}
      }
      try {
        const res = await instance.post("/recovery-password", user);
        console.log(res);
        const user_token = res.data.token
        localStorage.setItem("token", user_token)
        Swal.fire({
              icon: 'success',
              title: 'You will receive an email to your email to make the changes',
              text: 'revisa tu correo para continuar!'
            })
            setTimeout(() =>{
              // handleClose();
              navigate("/") 
            },1000)
    
      } catch (error) {
        Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Email incorrecto!'
              })
        console.log(error);
      }
    }
  

    return (
      <>
        <Container>
          <Row>
            <Col lg={6}>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="disabledTextInput" className='mt-3'>Enter your Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" name='email' value={email} onChange={({target})=> setEmail(target.value)} maxLength={50} />
                </Form.Group>
                <Button variant="warning" type="submit"> Sign in</Button>
                <div className='mx-auto text-center'>
                <img src={CartelBeer} alt="CartelBeer2" width="300" className="my-3"/>
                </div>
              </Form>
              </Col>
              <Col lg={6} >
              <img src={logo} alt="logo" className='d-none d-md-block mb-5' />
              </Col>
            
          </Row>
        </Container>
      </>
    )
  }
 



export default RecPassword