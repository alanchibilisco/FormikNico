import React, { useState, useEffect } from 'react'
import { Button, Col, Container, Form, Nav, Row, Card, Spinner, Badge } from "react-bootstrap";
import 'boxicons';
import './ProductPage.css'
import instance from '../../../api/axiosUsuarios';
import ModalCarrito from "../Carrito/carrito.jsx"
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
// import BtnPaginacion from '../../BtnPaginacion/BtnPaginacion';


const ProductPage = (props) => {
  //usamos un useState , para definir las variables
  const [producto, setProductos] = useState([])
  const [buscadorProducto, setbuscadorProductos] = useState("")
  const [contador, setContador] = useState(0)
  // carrrito
  const [productosCart, setProductosCart] = useState([])

const navigate = useNavigate()

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //creamos una constante para traer los productos instanciados de DB
  const getProductos = async () => {
    try {
      //creamos una constante para poner la info de la base
      const resp = await instance.get("/productos/")
      //si la base tiene info seteamos producto para que traiga la info de la base
      setProductos(resp.data)
    } catch (error) {
      console.log(error);
      alert("Error")

    }

  }
  const search = async () => {
    if (buscadorProducto === "") {
      getProductos()
      return
    }
    try {
      const resp = await instance.get(`/productos/?name=${buscadorProducto}&detalle=${buscadorProducto}`)
      setProductos(resp.data)
    } catch (error) {
      console.log(error);

    }
  }
  const searchEnter = (e) => {

    if (e.code === 'Enter') {
      search()
      e.preventDefault()
    }
  }
  const incrementarCarrito = () => {
    setContador(contador + 1);
  }
  //guardar en carrito
  const guardaCarrito = (newProduct) => {
    Swal.fire(
      "Added to cart",
      "",
      "success"
    );
    newProduct = {
      ...newProduct,
      uuid: uuidv4()
    };
    const newArr = productosCart;
    newArr.push(newProduct);
    setProductosCart(newArr);
    localStorage.setItem('cart', JSON.stringify(productosCart));
  }

  useEffect(() => {
    getProductos()
  }, [])
  useEffect(() => {
    setProductosCart(JSON.parse(localStorage.getItem('cart')) || []);
  }, [show])

  useEffect(() => {
    props.funcNav(true)
  }, [])

  return (
    <>
      <Container className="py-5 ">
        <h1>Our products</h1>
        <hr />
        <Nav className="justify-content-end mt-2" activeKey="/home">
          {/* carrito compra */}
          <Nav.Item>
            <Nav.Link>
              <div className="cart">
                <box-icon name="cart" onClick={handleShow}></box-icon>
                <span className="item_carrito" onClick={handleShow}>{productosCart.length}</span>
              </div>
            </Nav.Link>
          </Nav.Item>
          {/* carrito compra */}
          <Nav.Item>
            {/* Buscador */}
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="🍻 Search your beer 🍻"
                className="me-2 m"
                onChange={(e) => setbuscadorProductos(e.target.value)}
                onKeyPress={searchEnter}
              />
              <Button variant="outline-dark" className="me-3" onClick={search}>
                🍺
              </Button>
            </Form>
            {/* buscador */}
          </Nav.Item>
        </Nav>
        {/* productos */}
        <Row>
          {producto.length > 0 ? (
            producto.map((prod) => (
              <Col xs={12} lg={4} md={6} key={prod._id} className="mb-3">
                <Card className="mt-4 h-100 card-test" style={{ position: 'relative' }}>
                  <Card.Img variant="top" src={prod.ImgURL} className="imagen-tarjeta" />
                  <Card.Body>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <Card.Title className="">{prod.ProductName}</Card.Title>
                    </div>
                    <Badge bg="warning" text="dark">{prod.Category}</Badge>{' '}
                    <Card.Text className='mt-3'>
                      {prod.Productdetalle}
                    </Card.Text>
                    <Card.Text>
                      Graduacion: {prod.Graduation}
                    </Card.Text>
                    <Card.Text >
                      Precio:${prod.PriceProduct}
                    </Card.Text>
                    <div className="d-grid gap-2">
                    <Button type="submit" variant="info" onClick={() => { incrementarCarrito(); guardaCarrito(prod) }}> Add to 🛒</Button>
                      <Button variant='danger' onClick={() => navigate(`/favoritos`)}>Add to ❤</Button>
                      <Button variant="secondary" onClick={() => navigate(`/products/${prod._id}`)}>
                        Details
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <div className='d-flex justify-content-center'>
              <Spinner color="warning" />
            </div>
          )}
          
        </Row>
        {/* productos */}
      </Container>
      <ModalCarrito show={show} handleClose={handleClose} />
    </>
  );
}

export default ProductPage