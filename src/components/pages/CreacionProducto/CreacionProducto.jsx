import React, { useState } from 'react'
import { Col, Container, Form, Row , Button} from 'react-bootstrap'
import Swal from 'sweetalert2';
import logo from "../../../imagenes/Imagen1.png";
import { validateProductName, validateDetalleProducto,validatePrice,validateUrl,validateCategory, validatePorcentaje,} from '../../helpers/validateFields';
import instance from "../../../../../api/axios";


const CreacionProducto = () => {
  const [nombrerProducto, setnombreProducto] = useState("")
  const [detalleProducto, setdetallerProducto] = useState("Cerveza")
  const [precioProducto, setprecioProducto] = useState("0")
  const [urlProducto, seturlProducto] = useState("")
  const [categoriaProducto, setcategoriaProducto] = useState("Cerveza")
  const [graduacionProducto, setgraduacionProducto] = useState("")
  const [disponibilidadProducto, setdisponibilidadProducto] = useState("true")
  const handleSubmit=(e)=>{
    e.preventDefault()
    //validador de campos
    if (
     !validateProductName(nombrerProducto) ||
     !validateDetalleProducto(detalleProducto) ||
     !validatePrice(precioProducto)||
     !validateUrl(urlProducto) ||
     !validateCategory(categoriaProducto)||
     validatePorcentaje(graduacionProducto)
    )
    {
    alert("Validacion erronea")     
    return 
    }
  }
  const newProducto ={
    nombrerProducto,
    detalleProducto,
    precioProducto,
    urlProducto,
    categoriaProducto,
    graduacionProducto,
    disponibilidadProducto
  }
  Swal.fire({
    title: 'Quieres crear este producto?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'confirmar'
  }).then( async (result) => {
    if (result.isConfirmed) {
      try {
        const resp = await instance.post("/productos/")
      } catch (error) {
      console.log(error);  
      }
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })

  const postProductos =async()=>{

    try {
      
      const resp = await instance.post("/productos/")
      console.log(resp)
      postProductos(resp.data)
      
    } catch (error) {
      console.log(error);
      alert("Error")     
    }
  }

  return (
    <div>
      
      <Container className="py-1" >
        <h5>Crear Producto</h5>        
        <Row>
          <Col lg={6}>
            {/* Form Product */}
          <Form className="my-2" onSubmit={handleSubmit}>
          <Form.Group className="my-1 " controlId="nombrerProducto">
            <Form.Label>Producto</Form.Label>
            <Form.Control type="text" placeholder="Ej:Ipa" onChange={({target})=> setnombreProducto(target.value)} />
          </Form.Group>
          <Form.Group className="my-1" controlId="detalleProducto">
            <Form.Label>Detalle</Form.Label>
            <Form.Control type="text" placeholder="Ej: Cerveza Aromatizada con caramelo" onChange={({target})=> setdetallerProducto(target.value)}/>
          </Form.Group>
          <Form.Group className="my-1" controlId="precioProducto">
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" placeholder="Ej: 250" onChange={({target})=> setprecioProducto(target.value)} />
          </Form.Group>
          <Form.Group className="my-1" controlId="urlProducto">
            <Form.Label>Imagen URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: https://www.tubirra.com"
              onChange={({target})=> seturlProducto(target.value)}
            />
          </Form.Group>
          <Form.Group className="my-1" controlId="categoriaProducto">
            <Form.Label>Category</Form.Label>
            <Form.Select onChange={({target})=> setcategoriaProducto(target.value)} >
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
            <Form.Control type="text" placeholder="Ej: 5% "  onChange={({target})=> setgraduacionProducto(target.value)}/>
          </Form.Group>
          <Form.Group className="my-1" controlId="Disponibiliadad">
            <Form.Label>Disponibiidad</Form.Label>
          <Form.Select onChange={({target})=> setdisponibilidadProducto(target.value)}>
              <option value="">Seleccione una categoria</option>
              <option value="true">Si</option>
              <option value="false">No</option>                          
            </Form.Select>
          </Form.Group>
          <div className="text-end">
            <Button variant="warning">Crear🍻</Button>
          </div>
        </Form>
          </Col>      
        {/* Form Product */}
        {/* logo lateral */}
        <Col lg={6} >
        <img src={logo} alt="" />
        </Col>
        {/* logo lateral */}
        </Row>
      </Container>
    
    </div>
  )
}

export default CreacionProducto