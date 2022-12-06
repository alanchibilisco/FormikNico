import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from "../../../imagenes/Imagen1.png";
//importamos font
import "../../../../css/Footer.css"




const Footer = () => {
  return (
   
    <Container fluid>
            <Row className="row bg-dark align-items-center">
                <Col className=" text-center" xs={12} md={4}>
                    <img src={logo} alt="logo" width="200"/>
                </Col>

                <Col className=" text-center" xs={12} md={4}>
                    <h5 className="mb-3 text-white font-weight-bolder mt-3">Nuestras redes Sociales</h5>
                    <a href="https://www.facebook.com/login/"
                        className=" redes fa-brands fa-facebook text-decoration-none text-center mx-2 mt-2"
                        target="_blank"></a>
                    <a href="https://www.whatsapp.com/"
                        className="fa-brands fa-whatsapp redes text-center text-decoration-none mx-2 mt-2"
                        target="_blank"></a>
                    <a href="https://twitter.com/i/flow/login"
                        className="fa-brands fa-twitter redes text-center text-decoration-none mx-2 mt-2"
                        target="_blank"></a>
                    <a href="tel:+549-3813368181"
                        className="fa-solid fa-phone redes text-center text-decoration-none mx-2 mt-2" target="_blank"></a>
                    <a href="https://www.youtube.com/"
                        className="fa-brands fa-youtube redes text-center text-decoration-none mx-2 mt-2"
                        target="_blank"></a>
                    <a href="https://www.instagram.com/accounts/login/?"
                        className="fa-brands fa-instagram redes text-center text-decoration-none mx-2 mt-2"
                        target="_blank"></a>
                    <p className="mt-4 text-white font-weight-bolder border-bottom-2">Copyrigth 2022 © TODOS LOS DERECHOS
                        RESERVADOS <span className="text-info">EQUIPO Nº4</span> </p>
                </Col>

                <Col className="" xs={12} md={4}>
                    <p className="text-white text-center mt-2 mb-2">Los precios cotizados pueden variar sin previo aviso y no
                        incluyen IVA - Factura A.
                        Todas las imágenes y descripciones comerciales no son contractuales. Las descripciones de todos
                        los productos y
                        condiciones se encuentran sujetas a modificaciones sin previo aviso, pueden contener errores o
                        pueden no contener
                        todos los datos descriptivos. A los fines de obtener un asesoramiento completo e integral
                        deberán concurrir al
                        local.
                    </p>

                    <Col className="text-center">
                        <a href="/404.html" className="text-center">Terminos y Condiciones</a>
                    </Col>
                </Col>
            </Row>
        </Container> 
  
    
   
  )
}

export default Footer