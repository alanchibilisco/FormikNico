import React, { useState,useEffect } from 'react'
import { Button, Col, Container, Form, Nav, Row, Card,Spinner,} from "react-bootstrap";
import 'boxicons';
import './ProductPage.css'
import CardProduct from '../TablaProducto/Producto/CardProducto/CardProductp';
import instance from '../../../api/axios';


const ProductPage = () => {
  //usamos un useState , para definir las variables
  const [producto,setProductos]=useState([])
  const [buscadorProducto,setbuscadorProductos]=useState("")
  
 //creamos una constante para traer los productos instanciados de DB
  const getProductos= async()=>{
    try {
      //creamos una constante para poner la info de la base
      const resp= await instance.get("/productos/")
      console.log(resp);
      //si la base tiene info seteamos producto para que traiga la info de la base
      setProductos(resp.data)
    } catch (error) {
      console.log(error);
      alert("Error")
      
    } 

  }
  const search = async ()=>{
    console.log(buscadorProducto);
    if (buscadorProducto ===""){
    getProductos()
    return      
  }
  try {
    const resp =await instance.get(`/productos/?name=${buscadorProducto}&detalle=${buscadorProducto}`)
    setProductos(resp.data)
  } catch (error) {
    console.log(error);
    
  }
  }
  const searchEnter = (e) => {
    // console.log(e)
   
    //  console.log(e.code)
    if(e.code === 'Enter'){
      search()
      e.preventDefault()
    }
  }
    useEffect(()=>{
      getProductos()
    },[])

  return (
    <div>
      <Nav className="justify-content-end bg-dark" activeKey="/home">
       {/* carrito compra */}
        <Nav.Item>
          <Nav.Link href="/home">
            <div className="cart">
              <box-icon name="cart"></box-icon>
              <span classname="item_carrito">0</span>
            </div>
          </Nav.Link>
        </Nav.Item>
          {/* carrito compra */}
        <Nav.Item>
          {/* Buscador */}
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="🍻 Busca tu Birra 🍻 "
              className="me-2 m"
              onChange={(e) => setbuscadorProductos(e.target.value)}
              onKeyPress={searchEnter}
            />
            <Button variant="light" className="me-3" onClick={search}>
              🍺
            </Button>
          </Form>
          {/* buscador */}
        </Nav.Item>
      </Nav>
      <Container className="py-5 ">
        <h3> Nuestras Birras</h3>
        {/* productos */}
        <Row>
        {producto.length > 0 ? producto.map( ( prod) => (
          <Col xl={2} lg={4} md={6} key={prod._id}>
            <Card className="my-4">
              <Card.Img
                width={100}
                height={200}
                variant="top"
                src={prod.ImgURL}
                
              />
              <Card.Body>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <Card.Title className="">
                    {prod.ProductName}
                  </Card.Title>
                  <span className="badge bg-yellow">{prod.Category}</span>
                </div>
                <Card.Text>
                {prod.Productdetalle}
                </Card.Text>
                <div className="d-flex align-items-center justify-content-between">
                  <p className="mb-0 ms-4 fs-4 ">${prod.PriceProduct}</p>
                  <button className="btn-gray">Buy</button>
                </div>
              </Card.Body>
            </Card>
          </Col>
                ) )
                : <Spinner color="warning"/> } 
        </Row>
         {/* productos */}
      </Container>
    </div>
  );
}

export default ProductPage