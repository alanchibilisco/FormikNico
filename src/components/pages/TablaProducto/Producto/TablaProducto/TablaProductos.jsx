import React, { useEffect, useState } from "react";
import { Container, Table, Button, Row, Col, Form, Spinner, Image } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import 'boxicons';
import instance from "../../../../../api/axiosUsuarios";
import Swal from "sweetalert2";


const TablaProducto = (props) => {
  props.funcNav(true)

  const [producto, setProducto] = useState([])
  const [buscadorProducto, setbuscadorProducto] = useState("")
  const navigate = useNavigate()

  const getProductos = async () => {

    try {

      const resp = await instance.get("/productos/")
      console.log(resp)
      setProducto(resp.data)

    } catch (error) {
      console.log(error);
      alert("Error")
    }
  }

  const search = async () => {
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
  useEffect(() => {
    getProductos()
  }, [])

  const searchEnter = (e) => {
    // console.log(e)

    //  console.log(e.code)
    if (e.code === 'Enter') {
      search()
      e.preventDefault()
    }
  }
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Quieres borrar este producto?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const resp = await instance.delete(`/productos/${id}`,

          );
          if (resp.status === 200) {
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
    <>
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
              <i className="fa-solid fa-plus"></i>
              </Link>
            </Button>
          </Col>
          <Col lg={12}>
            <Table bordered responsive hover className="text-center align-middle mt-3 border-3 border-dark">
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
                    <td>{prod.Avaliable ? 'si' : 'no'}</td>
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
                    {/* <td className="w-25">
                      <div className="d-flex justify-content-center">
                        <Button variant="outline-success mx-1">
                          <Link
                            to={`/edicionproducto/${prod._id}`}
                            variant="outline-primary mx-1">
                            <box-icon
                              type="solid"
                              name="message-square-edit"
                            ></box-icon>
                          </Link>
                        </Button>
                        <Button variant="outline-danger mx-1" onClick={() => handleDelete(prod._id)}>
                          <box-icon
                            name="message-square-x"
                            type="solid"
                          ></box-icon>
                        </Button>
                      </div>
                    </td> */}
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
