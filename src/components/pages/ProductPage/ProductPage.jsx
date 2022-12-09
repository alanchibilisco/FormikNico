import React from 'react'
import { Button, Form, Nav, } from "react-bootstrap";
import 'boxicons';
import './ProductPage.css'

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
    <h3> Nuestras Birras</h3>
  </div>
  )
}

export default ProductPage