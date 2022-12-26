import React, { useState } from 'react'
import { Col, Container, Form, Row , Button, Image} from 'react-bootstrap'
import Swal from 'sweetalert2';
import logo from "../../../assets/img/logo/Imagen1.png"
import { validateProductName, validateDetalleProducto,validatePrice,validateUrl,validateCategory, validatePorcentaje,} from '../../helpers/validateFields';
import instance from "../../../api/axiosUsuarios";
import { useNavigate } from 'react-router-dom';


const CreacionProducto = () => {
  const [nombrerProducto, setnombreProducto] = useState("")
  const [detalleProducto, setdetallerProducto] = useState("Cerveza")
  const [precioProducto, setprecioProducto] = useState("0")
  const [urlProducto, seturlProducto] = useState("")
  const [categoriaProducto, setcategoriaProducto] = useState("Cerveza")
  const [graduacionProducto, setgraduacionProducto] = useState("")
  const [disponibilidadProducto, setdisponibilidadProducto] = useState("true")
  const navigate = useNavigate()
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
      Swal.fire("ops!","One or more fields are invalid","Error")     
     return 
     }
   
  const newProducto = {
    ProductName:nombrerProducto,
    Productdetalle:detalleProducto,
    PriceProduct:precioProducto,
    ImgURL:urlProducto,
    Category:categoriaProducto,
    Graduation:graduacionProducto,
    Avaliable:disponibilidadProducto
  }
  Swal.fire({
    title: 'Do you want to create this product?',    
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Accept'
  }).then( async (result) => {
    if (result.isConfirmed) {
      try {
        const resp = await instance.post("/productos/",
         newProducto,         
      );

      if (resp.status===200) {
        Swal.fire(
       'Created!',
       'The product was created correctly.',
       'success'
     )  
     
     navigate(`/tablaproducto`)    
     
      }      
      } catch (error) {
      console.log(error);   
      }
    }
  });
} ;



  return (
    <div>
      
      <Container className="py-5" >
        <h1>Create Product</h1>        
        <hr />
        <Row>
          <Col lg={6}>
            {/* Form Product */}
          <Form className="my-2" >
          <Form.Group className="my-1 " controlId="nombrerProducto">
            <Form.Label>Product</Form.Label>
            <Form.Control type="text" placeholder="Ej:Ipa" maxLength={50} minLength={1} onChange={({target})=> setnombreProducto(target.value)} />
          </Form.Group>
          <Form.Group className="my-1" controlId="detalleProducto">
            <Form.Label>Details</Form.Label>
            <Form.Control type="text" placeholder="Ej: Cerveza Aromatizada con caramelo"  maxLength={100} minLength={10} onChange={({target})=> setdetallerProducto(target.value)}/>
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
              <option value="">Select a category</option>
              <option value="Cerveza">Beer</option>
              <option value="Cocteleria">Cocktail</option>
              <option value="Merchandising">Merchandising</option>
              <option value="comidas">Foods</option>              
              <option value="Otros">Others</option>              
            </Form.Select>
          </Form.Group>
          <Form.Group className="my-1" controlId="Graducaion">
            <Form.Label>Graduation</Form.Label>
            <Form.Control type="text" placeholder="Ej: 5% "  onChange={({target})=> setgraduacionProducto(target.value)}/>
          </Form.Group>
          <Form.Group className="my-1" controlId="Disponibiliadad">
            <Form.Label>Availability</Form.Label>
          <Form.Select onChange={({target})=> setdisponibilidadProducto(target.value)}>
              <option value="true">Yes</option>
              <option value="false">No</option>                          
            </Form.Select>
          </Form.Group>
          <div className="text-center mt-3">
            <Button variant="warning" onClick={handleSubmit} >Create 🍻</Button>
            <Button variant="danger" className='mx-3' onClick={() => navigate(`/tablaproducto`)}>Go to Back 🡆</Button>
          </div>
        </Form>
          </Col>      
        {/* Form Product */}
        {/* logo lateral */}
        <Col className="d-none d-md-block text-center">
            <Image src={logo} alt="logo" style={{maxWidth: '100%'}} />
          </Col>
        {/* logo lateral */}
        </Row>
      </Container>
    
    </div>
  )
}

export default CreacionProducto