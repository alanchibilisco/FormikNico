import React, { useEffect, useRef, useState } from 'react'
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom';
import instance from '../../../api/axiosUsuarios';
import logo from "../../../assets/img/logo/Imagen1.png";
import { validateProductName, validateDetalleProducto, validatePrice, validateUrl, validateCategory, validatePorcentaje, } from '../../helpers/validateFields';
import Swal from 'sweetalert2';



const EdicionProducto = (props) => {
  props.funcNav(true)
  const [productoEditar, setProductoEditar] = useState({})

  const { id } = useParams()

  const productoNameRef = useRef("")
  const productoEditarRef = useRef("")
  const productoPriceRef = useRef("")
  const productoUrlRef = useRef("")
  const productoPorcentajeRef = useRef("")
  const navigate = useNavigate()


  const getProductosID = async () => {
    try {
      const resp = await instance.get(`/productos/${id}`,)
      setProductoEditar(resp.data)
        ;
    } catch (error) {
      console.log(error);
      alert("Error")
    }
  }

  useEffect(() => {
    getProductosID()

  }, [])

  useEffect(() => {
    props.funcNav(true)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    //validador de campos
    if (
      !validateProductName(productoNameRef.current.value) ||
      !validateDetalleProducto(productoEditarRef.current.value) ||
      !validatePrice(productoPriceRef.current.value) ||
      !validateUrl(productoUrlRef.current.value) ||
      !validateCategory(productoEditar.Category) ||
      validatePorcentaje(productoPorcentajeRef.current.value)
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'One or more fields are invalid!'
      })
      return
    }
    console.log("datos correctos");
    const productoActualizado = {
      ProductName: productoNameRef.current.value,
      Productdetalle: productoEditarRef.current.value,
      PriceProduct: productoPriceRef.current.value,
      ImgURL: productoUrlRef.current.value,
      Category: productoEditar.Category,
      Graduation: productoPorcentajeRef.current.value,
      Avaliable: productoEditar.Avaliable
    };
    Swal.fire({
      title: 'Do you want to update this product?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Accept'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const resp = await instance.put(`/productos/${id}`,
            productoActualizado,
          );
          if (resp.status === 200) {
            Swal.fire(
              'Updated',
              'The product was successfully updated.',
              'success'
            )
            navigate(`/tablaproducto`)

          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  }

  return (
    <div>
      <Container className="py-5" >
        <h1 >Edit Product</h1>
        <hr />
        <Row>
          <Col xs={12} md={6}>
            <Form className="my-2" >
              <Form.Group className="my-1" controlId="nombrerProducto">
                <Form.Label>Product</Form.Label>
                <Form.Control type="text" placeholder="Ej:Ipa" maxLength={50} minLength={1}defaultValue={productoEditar.ProductName}
                  ref={productoNameRef} />
              </Form.Group>
              <Form.Group className="my-1" controlId="detalleProducto">
                <Form.Label>Details</Form.Label>
                <Form.Control type="text" placeholder="Ej: Cerveza Aromatizada con caramelo" maxLength={100} minLength={10}defaultValue={productoEditar.Productdetalle} ref={productoEditarRef} />
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
                <Form.Select value={productoEditar.Category} onChange={({ target }) => setProductoEditar({ ...productoEditar, Category: target.value })}>
                  <option value="">Select a category</option>
                  <option value="Cerveza">Beer</option>
                  <option value="Cocteleria">Cocktail</option>
                  <option value="Merchandising">Merchandising</option>
                  <option value="comidas">Foods</option>
                  <option value="Otros">Others</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="my-1" controlId="Graduacion">
                <Form.Label>Graduacion</Form.Label>
                <Form.Control type="text" placeholder="Ej: 5%" defaultValue={productoEditar.Graduation}
                  ref={productoPorcentajeRef} />
              </Form.Group>
              <Form.Group className="my-1" controlId="Disponibiliadad">
                <Form.Label>Stock</Form.Label>
                <Form.Select value={productoEditar.Avaliable} onChange={({ target }) => setProductoEditar({ ...productoEditar, Avaliable: target.value })}>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </Form.Select>
              </Form.Group>
              <div className="text-center mt-3">
                <Button variant="warning" onClick={handleSubmit}>Update 🍻</Button>
                <Button variant="danger" className='mx-3' onClick={() => navigate(`/tablaproducto`)}>Go to Back 🡆</Button>
              </div>
            </Form>
          </Col>
          {/* Form Product */}
          <Col className="d-none d-md-block text-center">
            <Image src={logo} alt="logo" style={{maxWidth: '100%'}} />
          </Col>

        </Row>
      </Container>
    </div>
  )
}

export default EdicionProducto