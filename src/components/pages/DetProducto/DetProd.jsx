import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button, Image } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import instance from '../../../api/axiosUsuarios';

const DetProd = (props) => {
    props.funcNav(true)
    const [productsDetalle, setProductsDetalle] = useState({})
    const { id } = useParams();

    const getProductosID = async()=>{
        try {
          const resp =await instance.get(`/productos/${id}`,)
          console.log(resp);      
          setProductsDetalle(resp.data)      
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
        <Container>
            <Row className='my-3'>
                <Col>
                    <Image style={{ width: '350px' }} src={productsDetalle.ImgURL} />
                </Col>
                <Col>
                    <h1>{productsDetalle.ProductName}</h1>
                    <h3>{productsDetalle.Category}</h3>
                    <h3>{productsDetalle.Productdetalle}</h3>
                    <h3>{productsDetalle.PriceProduct}</h3>
                    <h3>{productsDetalle.Graduation}</h3>
                </Col>
            </Row>
            <Row>
                <Col><Button variant="warning">comprar</Button>
                    <Button className='mx-3' variant="warning">cancelar</Button>
                    <Button variant="warning">agragar al carrito</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default DetProd