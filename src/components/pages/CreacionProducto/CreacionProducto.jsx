import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import logo from "../../../imagenes/Imagen1.png";

const CreacionProducto = () => {
  return (
    <div>
      
      <Container className="py-1" >
        <h5>Crear Producto</h5>        
        <Row>
          <Col lg={6}>
          <Form className="my-2" >
          <Form.Group className="my-1" controlId="formBasicEmail">
            <Form.Label>Producto</Form.Label>
            <Form.Control type="text" placeholder="Ej: Café" />
          </Form.Group>
          <Form.Group className="my-1" controlId="formBasicEmail">
            <Form.Label>Detalle</Form.Label>
            <Form.Control type="text" placeholder="Ej: Café" />
          </Form.Group>
          <Form.Group className="my-1" controlId="formBasicPassword">
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" placeholder="Ej: 50" />
          </Form.Group>
          <Form.Group className="my-1" controlId="formBasicPassword">
            <Form.Label>Imagen URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: https://media.istockphoto.com/photos/two-freshly-baked-french-id1277579771?k=20"
            />
          </Form.Group>
          <Form.Group className="my-1" controlId="formBasicCheckbox">
            <Form.Label>Category</Form.Label>
            <Form.Select>
              <option value="">Seleccione una categoria</option>
              <option value="Cerveza">Cerveza</option>
              <option value="Cocteleria">Cocteleria</option>
              <option value="Merchandising">Merchandising</option>
              <option value="comidas">Comidas</option>              
            </Form.Select>
          </Form.Group>
          <Form.Group className="my-1" controlId="formBasicPassword">
            <Form.Label>Graduacion</Form.Label>
            <Form.Control type="number" placeholder="Ej: 50" />
          </Form.Group>
          <Form.Group className="my-1" controlId="formBasicCheckbox">
            <Form.Label>Disponibiidad</Form.Label>
          <Form.Select>
              <option value="">Seleccione una categoria</option>
              <option value="true">Si</option>
              <option value="false">No</option>                          
            </Form.Select>
          </Form.Group>
          <div className="text-end">
            <button className="btn-yellow">Save</button>
          </div>
        </Form>
          </Col>
      
        {/* Form Product */}
        <Col lg={6} >
        <img src={logo} alt="" />
        </Col>
        </Row>
      </Container>
    
    </div>
  )
}

export default CreacionProducto