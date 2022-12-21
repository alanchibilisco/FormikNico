import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Col, Row, Card, Badge, Container } from "react-bootstrap";



const CardProducto = ({ img, name, text, graduation, price, id, category }) => {

  const navigate = useNavigate()

  return (
    <Container>
      <Row>
        <Col>
          <Card className=" h-100 card-test" style={{ position: 'relative' }}>
            <Card.Img variant="top" src={img} className="imagen-tarjeta-home" />
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
              <Card.Text >
                Precio: ${price}
              </Card.Text>
              <div className="d-grid gap-2">
                  <Button type="submit" variant="info" onClick={() => navigate(`/buy`)}>
                    Add to 🛒
                  </Button>
                  <Button variant='danger' onClick={() => navigate(`/favoritos`)}>
                    Add to ❤
                  </Button>
                </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default CardProducto