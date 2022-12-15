import React from "react";
import { Carousel } from "react-bootstrap";
// import './Carousel.css'
import cerveza1 from '../../../../assets/img/carousel/cerveza1.png'
import cerveza2 from '../../../../assets/img/carousel/cerveza2.png'
import cerveza3 from '../../../../assets/img/carousel/cerveza3.jpg'



const Calesita = () => {
  return (
    <Carousel fade>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={cerveza1}
          alt="cerveza1"
        />
        <Carousel.Caption>
          <h3>Cerveza 1</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={cerveza2}
          alt="cerveza2"
        />
        <Carousel.Caption>
          <h3>Cerveza 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={cerveza3}
          alt="cerveza3"
        />
        <Carousel.Caption>
          <h3>Cerveza 3</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Calesita;
