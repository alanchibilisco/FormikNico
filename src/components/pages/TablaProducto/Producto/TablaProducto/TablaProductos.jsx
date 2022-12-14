import React, { useEffect, useState } from "react";
import { Container, Table, Button, Row, Col, Form, Spinner, Image } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import 'boxicons';
import instance from "../../../../../api/axios";
import Swal from "sweetalert2";


const TablaProducto = () => {

  const [producto , setProducto] =useState([])
  const [buscadorProducto , setbuscadorProducto] =useState("")
  const navigate = useNavigate()
 
const getProductos =async()=>{

    try {
      
      const resp = await instance.get("/productos/")
      console.log(resp)
      setProducto(resp.data)
      
    } catch (error) {
      console.log(error);
      alert("Error")     
    }
  }

const search = async() => {
  console.log(buscadorProducto)
if (buscadorProducto === "") {
  getProductos()
  return
}
  try {
    const resp = await instance.get(`/productos/?name=${buscadorProducto}&detalle=${buscadorProducto}`)
    // console.log(res)
    setProducto(resp.data)
  } catch (error) {
    console.log(error)
  }
}
  useEffect(()=>{
    getProductos()
  },[])

const searchEnter = (e) => {
    // console.log(e)
   
    //  console.log(e.code)
    if(e.code === 'Enter'){
      search()
      e.preventDefault()
    }
  }
const handleDelete = (id)=>{
  Swal.fire({
    title: 'Quieres borrar este producto?',    
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Aceptar'
  }).then( async (result) => {
    if (result.isConfirmed) {
      try {
         const resp = await instance.delete(`/productos/${id}`,
            
      );
      if (resp.status===200) { 
        Swal.fire(
          'Borrado',
          'Su producto se borro correctamente.',
          'success'
        )
        getProductos()

      }    
      } catch (error) {
      console.log(error);  
      }
    }
  });
    }
  

  
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
                onChange={(e) => setbuscadorProducto(e.target.value)}
                onKeyPress={searchEnter}
              />
              <Button variant="outline-light" onClick={search}>
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
        {producto.length > 0 ? producto.map( ( prod, index) => (
        <tr key={prod._id} >
        <td>{index}</td>
        <td>{prod.ProductName}</td>
        <td>{prod.Productdetalle}</td>
        <td>${prod.PriceProduct}</td>
        <td>
          <Image className="truncate-img-link m-0" src={prod.ImgURL} width={100}
        height={100}/>
        </td>
        <td>{prod.Category}</td>
        <td>{prod.Graduation}</td>
        <td>{prod.Avaliable ? 'si' : 'no'}</td>
        <td className="w-25">
          <div className="d-flex justify-content-center">
            <Button variant="outline-success mx-1">
              <Link
                to={`/productpage/edicionproducto/${prod._id}`}
                variant="outline-primary mx-1">
                <box-icon
                  type="solid"
                  name="message-square-edit"
                ></box-icon>
              </Link>
            </Button>
            <Button variant="outline-danger mx-1" onClick={()=>handleDelete(prod._id)}>
              <box-icon
                name="message-square-x"
                type="solid"
              ></box-icon>
            </Button>
          </div>
        </td>
      </tr>
      ) )
      : <Spinner color="warning"/> }               
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TablaProducto;
