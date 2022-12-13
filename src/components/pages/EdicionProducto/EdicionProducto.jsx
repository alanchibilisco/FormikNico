import React, { useEffect, useRef, useState } from 'react'
import { Button, Col, Container, Form, Row ,} from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import instance from '../../../api/axios';
import logo from "../../../imagenes/Imagen1.png";
import { validateProductName, validateDetalleProducto,validatePrice,validateUrl,validateCategory, validatePorcentaje,} from '../../helpers/validateFields';
import Swal from 'sweetalert2';



const EdicionProducto = () => {
  const [productoEditar, setProductoEditar] = useState({})
  
  const{id}= useParams()
   console.log(useParams);

  const productoNameRef =useRef("") 
  const productoEditarRef =useRef("") 
  const productoPriceRef =useRef("") 
  const productoUrlRef =useRef("") 
  const productoPorcentajeRef =useRef("") 
  

   const getProductosID = async()=>{
     try {
       const resp =await instance.get(`/productos/${id}`,)
       console.log(resp);      
       setProductoEditar(resp.data)      
       ;
     } catch (error) {
      console.log(error);
      alert("Error")       
     }
   }

  useEffect(()=>{
    getProductosID()

  },[])

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(productoNameRef.current.value);
     //validador de campos
      if (
       !validateProductName(productoNameRef.current.value) ||
       !validateDetalleProducto(productoEditarRef.current.value) ||
       !validatePrice(productoPriceRef.current.value)||
       !validateUrl(productoUrlRef.current.value) ||
       !validateCategory(productoEditar.Category)||
       validatePorcentaje(productoPorcentajeRef.current.value)
      )
      {
      Swal.fire("ops!","Uno o mas Datos son Invalidos","Error")     
     return 
     }
     console.log("datos correctos");
  }
  
  
  return (
    <div>
         
         <Container className="py-1" >
        <h5>Editar Producto</h5>        
        <Row>
          <Col lg={6}>
          <Form className="my-2" >
          <Form.Group className="my-1" controlId="nombrerProducto">
            <Form.Label>Producto</Form.Label>
            <Form.Control type="text" placeholder="Ej:Ipa" defaultValue={productoEditar.ProductName}
            ref={productoNameRef}/>
          </Form.Group>
          <Form.Group className="my-1" controlId="detalleProducto">
            <Form.Label>Detalle</Form.Label>
            <Form.Control type="text" placeholder="Ej: Cerveza Aromatizada con caramelo"  defaultValue={productoEditar.Productdetalle} ref={productoEditarRef}/>
          </Form.Group>
          <Form.Group className="my-1" controlId="precioProducto">
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" placeholder="Ej: 250" defaultValue={productoEditar.PriceProduct} ref={productoPriceRef} />
          </Form.Group>
          <Form.Group className="my-1" controlId="urlProducto">
            <Form.Label>Imagen URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: https://www.tubirra.com"
              defaultValue={productoEditar.ImgURL}
              ref={productoUrlRef}
            />
          </Form.Group>
          <Form.Group className="my-1" controlId="categoriaProducto">
            <Form.Label>Category</Form.Label>
            <Form.Select value={productoEditar.Category} onChange={({target})=>setProductoEditar({...productoEditar,Category: target.value})}>
              <option value="">Seleccione una categoria</option>
              <option value="Cerveza">Cerveza</option>
              <option value="Cocteleria">Cocteleria</option>
              <option value="Merchandising">Merchandising</option>
              <option value="comidas">Comidas</option>   
              <option value="Otros">Otros</option>            
            </Form.Select>
          </Form.Group>
          <Form.Group className="my-1" controlId="Graduacion">
            <Form.Label>Graduacion</Form.Label>
            <Form.Control type="text" placeholder="Ej: 5%" defaultValue={productoEditar.Graduation}
            ref={productoPorcentajeRef}/>
          </Form.Group>
          <Form.Group className="my-1" controlId="Disponibiliadad">
            <Form.Label>Disponibiidad</Form.Label>
          <Form.Select value={productoEditar.Avaliable} onChange={({target})=>setProductoEditar({...productoEditar,Avaliable: target.value})}>
              <option value="">Seleccione una categoria</option>
              <option value="true">Si</option>
              <option value="false">No</option>                          
            </Form.Select>
          </Form.Group>
          <div className="text-center">
            <Button variant="warning" onClick={handleSubmit}>Actualizar🍻</Button>
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