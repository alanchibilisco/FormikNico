import React, { useState } from 'react'
import { Container, Row, Col, Button, Image } from 'react-bootstrap'
import { useParams } from 'react-router-dom';

const DetProd = () => {

    const { id } = useParams();
    const [product, setProduct] = useState({});

    // useEffect(() => {
    //     getBlogById(id).then((respuesta) => {
    //         console.log(respuesta);
    //         if (respuesta?.msg) {
    //             setMensaje(respuesta.msg);
    //         } else {
    //             setPost(respuesta.blog);
    //         }
    //         setLoading(false);
    //     });
    // }, []);

    return (
        <Container>
            <Row className='my-3'>
                <Col>
                    <Image style={{ width: '350px' }} src={product.ImgURL} />
                </Col>
                <Col>
                    <h1>{product.ProductName}</h1>
                    <h3>{product.Category}</h3>
                    <h3>{product.Productdetalle}</h3>
                    <h3>{product.PriceProduct}</h3>
                    <h3>{product.Graduation}</h3>
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