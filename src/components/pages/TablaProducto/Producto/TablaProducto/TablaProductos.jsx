import React, { useEffect, useState } from "react";
import { Container, Table, Button, Row, Col, Form, Spinner, Image } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
// import 'boxicons';
import instance from "../../../../../api/axiosUsuarios";
import Swal from "sweetalert2";


const TablaProducto = (props) => {

  const [producto, setProducto] = useState([])
  const [buscadorProducto, setbuscadorProducto] = useState("")
  const navigate = useNavigate()

  const getProductos = async () => {

    try {

      const resp = await instance.get("/productos/")
      setProducto(resp.data)

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
      setProducto(resp.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getProductos()
  }, [])

  useEffect(() => {
    props.funcNav(true)
  }, [])

  const searchEnter = (e) => {
    if (e.code === 'Enter') {
      search()
      e.preventDefault()
    }
  }
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Do you want to delete this product?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Accept'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const resp = await instance.delete(`/productos/${id}`,

          );
          if (resp.status === 200) {
            Swal.fire(
              'Deleted',
              'The product was successfully deleted.',
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
    <>
      <Container className="py-5">
        <Row>
          <h1>Products table</h1>
          <hr />
          <div className="d-flex justify-content-end">
            <div >
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search Product"
                className="me-1"
                aria-label="Search"
                onChange={(e) => setbuscadorProducto(e.target.value)}
                onKeyPress={searchEnter}
              />
              <Button variant="outline-dark" onClick={search} className="float-end">
              
                <i className="fa-solid fa-magnifying-glass"></i>
              </Button>
            </Form>
            </div>
            <div>
            <Button variant="primary" className="ms-2">
            <Link to="/creacionproducto" >
              <i className="fa-solid fa-plus" style={{color: "white"}}></i>
              </Link>
              </Button>{' '}
            </div>
          </div>
          
          <Col xs={12}>
            <Table bordered striped variant="dark" responsive hover className="text-center align-middle mt-3">
              <thead>
                <tr>
                  <th>N.</th>
                  <th>Product</th>
                  <th>Details</th>
                  <th>Price</th>
                  <th>Img Url</th>
                  <th>Category</th>
                  <th>Graduation</th>
                  <th>Stock</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {producto.length > 0 ? producto.map((prod, index) => (
                  <tr key={prod._id} >
                    <td>{index}</td>
                    <td>{prod.ProductName}</td>
                    <td>{prod.Productdetalle}</td>
                    <td>${prod.PriceProduct}</td>
                    <td>
                      <Image className="truncate-img-link m-0" src={prod.ImgURL} width={100}
                        height={100} />
                    </td>
                    <td>{prod.Category}</td>
                    <td>{prod.Graduation}</td>
                    <td>{prod.Avaliable ? 'Yes' : 'No'}</td>
                    <td >
                      <div className="d-flex justify-content-center">
                      <Button variant="outline-success mx-1">
                        <Link to={`/edicionproducto/${prod._id}`} variant="outline-primary mx-1" style={{color: 'black'}}>
                          <i className="fa-solid fa-pen-to-square"></i>
                        </Link>
                      </Button>
                      <Button variant="outline-danger mx-1" onClick={() => handleDelete(prod._id)}>
                        <i className="fa-solid fa-trash-can"></i>
                      </Button>
                      </div>
                    </td>
              
                  </tr>
                ))
                  :
                  <tr>
                    <td>
                    <Spinner color="warning" />
                  </td>
                  </tr>}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TablaProducto;
