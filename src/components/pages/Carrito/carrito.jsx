import React from "react";
import { Button, Container, Image, Col, Row } from "react-bootstrap";
import logo from "../../../assets/img/logo/Imagen1.png";
import "boxicons";
import "./carrito.css";

const Carrito = () => {
  return (
    <Container fluid>
      <Row className="d-flex">       
        <Col>
        <div className="carritos show">
          <div className="carrito show">
            <div className="carrito_close">
              <box-icon name="x"></box-icon>
            </div>
            <h2>Su Carrito:</h2>
            <div className="carrito_center">
              <div className="carrito_item">
                <Image src={logo} width={230} height={230} alt="" />
                <div>
                  <h6>title</h6>
                  <p className="price">$345</p>
                  <div>
                    <box-icon type="solid" name="up-arrow"></box-icon>
                    <p className="cantidad">1</p>
                    <box-icon name="down-arrow" type="solid"></box-icon>
                  </div>
                  <div className="remove_item">
                    <box-icon Name="trash" type="solid"></box-icon>
                  </div>
                </div>
              </div>
            </div>
            <div className="carrito_footer">
              <h6>Total: $2223</h6>
              <Button variant="warning">Pagar</Button>
            </div>
          </div>
        </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Carrito;
