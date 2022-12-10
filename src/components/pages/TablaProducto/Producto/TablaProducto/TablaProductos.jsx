import React, { useEffect, useState } from "react";
import { Container, Table, Button, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import 'boxicons';
import instance from "../../../../../api/axios";

const TablaProducto = () => {

  const [producto , setProducto] =useState([])

  const getProductos =async()=>{

    try {
      const resp = await instance.get("/productos/")
      setProducto(resp.data)
      
    } catch (error) {
      console.log(error);
      alert("Error")     
    }
  }
  useEffect(()=>{
    getProductos()
  },[])

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
              <Button variant="outline-light">
                <box-icon name="search-alt-2"></box-icon>
              </Button>
            </Form>
          </Col>
          <Col lg={3}>
            <Button variant="outline-primary mx-1">
              <Link to="/productpage/creacionproducto" variant="outline-light">
                <box-icon name="message-square-add" type="solid"></box-icon>
              </Link>
            </Button>
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
                <tr>
                  <td>1</td>
                  <td>IPA</td>
                  <td>Cerveza Amarga</td>
                  <td>$250</td>
                  <td>
                    <p className="truncate-img-link m-0">
                      https://media.istockphoto.com/photos/fresh-croissants-on-wooden-board-and-orange-jam-in-bowl-picture-id1199388833?k=20&m=1199388833&s=612x612&w=0&h=RzQ3L1uDy9Id4Xx5-GxMeGvm5V00J02F_nnksyZ0f-s=
                    </p>
                  </td>
                  <td>Cerveza</td>
                  <td>3%</td>
                  <td>si</td>
                  <td className="w-25">
                    <div className="d-flex justify-content-center">
                      <Button variant="outline-success mx-1">
                        <Link
                          to="/productpage/edicionproducto"
                          variant="outline-primary mx-1"
                        >
                          <box-icon
                            type="solid"
                            name="message-square-edit"
                          ></box-icon>
                        </Link>
                      </Button>
                      <Button variant="outline-danger mx-1">
                        <box-icon
                          name="message-square-x"
                          type="solid"
                        ></box-icon>
                      </Button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TablaProducto;
