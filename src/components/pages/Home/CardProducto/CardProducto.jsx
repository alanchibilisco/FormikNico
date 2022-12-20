import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Col, Row, Card, Badge, Container } from "react-bootstrap";
// import ipa from '../../../assets/img/imgHome/IPA1.jpg'
// import Lagers from '../../../assets/img/imgHome/amberLager.webp'
// import Porter from '../../../assets/img/imgHome/porter.png'
// import Stout from '../../../assets/img/imgHome/stout.jfif'
// import Apa from '../../../assets/img/imgHome/apa.jpg'
// import Honey from '../../../assets/img/imgHome/honey.jpg'
// import Scottisch from '../../../assets/img/imgHome/Scottisch.jfif'


const CardProducto = ({ img, name, text, graduation, price, id, category }) => {

  const navigate = useNavigate()

  return (
    // <Card className="my-4 h-100 card-test" style={{ position: 'relative' }}>
    //   <Card.Img variant="top" src={img} className="imagen-tarjeta" />
    //   <Card.Body>
    //     <div className="d-flex align-items-center justify-content-between mb-2">
    //       <Card.Title>{name}</Card.Title>
    //     </div>
    //     <Badge bg="warning" text="dark">{category}</Badge>{' '}
    //     <Card.Text className='mt-3'>
    //       {text}
    //     </Card.Text>
    //     <Card.Text>
    //       Graduacion: {graduation}
    //     </Card.Text>
    //     <Card.Text className='textCard'>
    //       Precio: ${price}
    //     </Card.Text>
    //     <div style={{ position: 'absolute', bottom: 0 }} className="mb-3">
    //       <Button type="submit" variant="info"> Add to 🛒</Button>
    //       <Button className='mx-3' variant='danger' onClick={() => navigate(`/favoritos`)}>Add to ❤</Button>
    //       <Button variant="secondary" onClick={() => navigate(`/products/${id}`)}>
    //         Details
    //       </Button>
    //     </div>
    //   </Card.Body>
    // </Card>
    <Container>
      <Row>
        <Col>
          <Card className="my-4 h-100 card-test" style={{ position: 'relative' }}>
            <Card.Img variant="top" src={img} className="imagen-tarjeta" />
            <Card.Body>
              <div className="d-flex align-items-center justify-content-between mb-2">
                <Card.Title>{name}</Card.Title>
              </div>
              <Badge bg="warning" text="dark">{category}</Badge>{' '}
              <Card.Text className='mt-3'>
                {text}
              </Card.Text>
              <Card.Text>
                Graduacion: {graduation}
              </Card.Text>
              <Card.Text className='textCard'>
                Precio: ${price}
              </Card.Text>
              <div style={{ position: 'absolute', bottom: 0, width: "100%" }} className="mb-3">
                <Button type="submit" variant="info"> Add to 🛒</Button>
                <Button variant='danger' onClick={() => navigate(`/favoritos`)}>Add to ❤</Button>
                {/* <Button variant="secondary" onClick={() => navigate(`/products/${id}`)}>
                  Details
                </Button> */}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default CardProducto