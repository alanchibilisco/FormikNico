import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button, Image } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom';
import instance from '../../../api/axiosUsuarios';

const DetProd = (props) => {
    props.funcNav(true)
    const [productsDetalle, setProductsDetalle] = useState({})
    const { id } = useParams();

    const navigate = useNavigate()

    const getProductosID = async()=>{
        try {
          const resp =await instance.get(`/productos/${id}`,)
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
                <Col xs={12} md={4} className="d-flex justify-content-center">
                    <Image style={{width: '300px', height: '300px', objectFit: 'cover'}} src={productsDetalle.ImgURL}/>
                </Col>
                <Col xs={12} md={8} className="d-flex flex-column my-auto">
                    <h1><span className='text-danger'>Name: </span>{productsDetalle.ProductName}</h1>
                    <h2><span className='text-danger'>Category: </span>{productsDetalle.Category}</h2>
                    <h3><span className='text-danger'>Description: </span>{productsDetalle.Productdetalle}</h3>
                    <h3><span className='text-danger'>Graduation: </span>{productsDetalle.Graduation}</h3>
                    <h3><span className='text-danger'>Price: </span>{productsDetalle.PriceProduct}</h3>
                    <div className='d-flex'>
                    <Button variant="primary" onClick={() => navigate(`/buy`)}>Buy</Button>
                    <Button variant="danger" className='mx-3' onClick={() => navigate(`/favoritos`)}>Favorite</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default DetProd