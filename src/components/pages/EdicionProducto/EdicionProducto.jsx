import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row ,} from 'react-bootstrap'
import { json, useParams } from 'react-router-dom';
import instance from '../../../api/axios';
import logo from "../../../imagenes/Imagen1.png";


const EdicionProducto = () => {
  const [productoEditar, setProductoEditar] = useState({})
  
  const{id}= useParams()
   console.log(useParams);

   const getProductosID = async()=>{
     try {
       const resp =await instance.get(`/productos/${id}`,)
       const productoApi = await resp
       setProductoEditar(productoApi)      
       ;
     } catch (error) {
      console.log(error);
      alert("Error")       
     }
   }

  useEffect(()=>{
    getProductosID()

  },[])
  return (
    <div>
         
         <Container className="py-1" >
        <h5>Editar Producto</h5>        
        <Row>
          <Col lg={6}>
          <Form className="my-2" >
          <Form.Group className="my-1" controlId="nombrerProducto">
            <Form.Label>Producto</Form.Label>
            <Form.Control type="text" placeholder="Ej:Ipa" />
          </Form.Group>
          <Form.Group className="my-1" controlId="detalleProducto">
            <Form.Label>Detalle</Form.Label>
            <Form.Control type="text" placeholder="Ej: Cerveza Aromatizada con caramelo" />
          </Form.Group>
          <Form.Group className="my-1" controlId="precioProducto">
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" placeholder="Ej: 250" />
          </Form.Group>
          <Form.Group className="my-1" controlId="urlProducto">
            <Form.Label>Imagen URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: https://www.tubirra.com"
            />
          </Form.Group>
          <Form.Group className="my-1" controlId="categoriaProducto">
            <Form.Label>Category</Form.Label>
            <Form.Select>
              <option value="">Seleccione una categoria</option>
              <option value="Cerveza">Cerveza</option>
              <option value="Cocteleria">Cocteleria</option>
              <option value="Merchandising">Merchandising</option>
              <option value="comidas">Comidas</option>   
              <option value="Otros">Otros</option>            
            </Form.Select>
          </Form.Group>
          <Form.Group className="my-1" controlId="Graducaion">
            <Form.Label>Graduacion</Form.Label>
            <Form.Control type="number" placeholder="Ej: 5%" />
          </Form.Group>
          <Form.Group className="my-1" controlId="Disponibiliadad">
            <Form.Label>Disponibiidad</Form.Label>
          <Form.Select>
              <option value="">Seleccione una categoria</option>
              <option value="true">Si</option>
              <option value="false">No</option>                          
            </Form.Select>
          </Form.Group>
          <div className="text-center">
            <Button variant="warning">Actualizar🍻</Button>
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

export default EdicionProducto