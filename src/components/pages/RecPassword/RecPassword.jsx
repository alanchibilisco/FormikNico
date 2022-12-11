import React from 'react'
import { Col, Container, Row,Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';



const RecPassword = (props) => {
  props.funcNav(true)
  const navigate = useNavigate()
  const handleSubmit = (e) =>{
    e.preventDefault()

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'You will receive an email to your email to make the changes',
      showConfirmButton: false,
      timer: 1500
    })
    navigate("/")

  }
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="disabledTextInput">enter Email</Form.Label>
                <Form.Control id="disabledTextInput" placeholder="email" />
              </Form.Group>
              <button className='btn btn-warning btn-block'>send</button>
            </Form>
          </Col>
          <Col>2 of 2</Col>
        </Row>
      </Container>
    </>
  )
}

export default RecPassword