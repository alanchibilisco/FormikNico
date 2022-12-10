import React from 'react'
import { Button, Col, Container, Form, Nav, Row, } from "react-bootstrap";
import 'boxicons';
import './ProductPage.css'
import CardProduct from '../TablaProducto/Producto/CardProducto/CardProductp';

const ProductPage = () => {
  return (
    <div>
    <Nav className="justify-content-end bg-dark" activeKey="/home">
         <Nav.Item>
          <Nav.Link href="/home">
            <div className='cart'>
              <box-icon name="cart"></box-icon>
              <span classname="item_carrito">0</span>
            </div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="🍻 Busca tu Birra 🍻 "
                  className="me-2 m"
                  />
                <Button variant="light" className="me-3">🍺</Button>
        </Form>          
        </Nav.Item>
    </Nav>   
    <Container className="py-5 ">
    <h3> Nuestras Birras</h3>
    <Row>
          <Col xl={2} lg={4} md={6}>
            <CardProduct />
          </Col>
   
          <Col xl={2} lg={4} md={6}>
            <CardProduct />
          </Col>
  
          <Col xl={2} lg={4} md={6}>
            <CardProduct />
          </Col>
          <Col xl={2} lg={4} md={6}>
            <CardProduct />
          </Col>
  
          <Col xl={2} lg={4} md={6}>
            <CardProduct />
          </Col>
   </Row>
   </Container>

  </div>
  )
}

export default ProductPage