import React from 'react'
import { Container, Table ,Button, Row, Col, Form} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Product  from "../TablaProducto/Producto/Producto";



const TablaProducto = () => {
  return (
    <div>
      <Container className="py-5">
        <Row>
          <Col lg={6}>
          <h5> Tabla de Productos:</h5>
          </Col>
          <Col lg={3}>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar Producto"
              className="me-1 mt-1"
              aria-label="Search"
            />
            <Button variant="outline-light"><box-icon name='search-alt-2' ></box-icon></Button>
          </Form>
          </Col>
          <Col lg={3}>
          <Button variant="outline-primary mx-1"><Link to="/productpage/creacionproducto" variant="outline-light"><box-icon name='message-square-add' type='solid' ></box-icon></Link></Button>
          </Col>
          <Col lg={12}>
          <Table bordered hover responsive className="align-middle mt-3">
            <thead>
              <tr>
                <th>N.</th>
                <th>Producto</th>
                <th>Detalle</th>
                <th>Precio</th>
                <th>ImagenURL</th>
                <th>Categoria</th>
                <th>Graduacion</th>
                <th>Disponible</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
            <Product/>
            <Product/>
            <Product/>
            <Product/>

            </tbody>
          </Table>
          </Col>
        </Row>
        
      </Container>
    </div>
  );
}

export default TablaProducto