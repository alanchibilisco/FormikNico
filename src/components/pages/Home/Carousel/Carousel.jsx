import React from "react";
import { Carousel } from "react-bootstrap";
import './Carousel.css'


const Calesita = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 img-carousel"
            src="https://images.everydayhealth.com/images/why-you-could-be-drinking-more-than-you-think-1440x810.jpg"
            alt="cafe"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 img-carousel"
            src="https://i0.wp.com/www.charlestoncvb.com/blog/wp-content/uploads/EdmundsOast9.jpg?resize=1400%2C750&ssl=1"
            alt="croissant"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-carousel"
            src="https://www.eatthis.com/wp-content/uploads/sites/4/2022/02/Beer-flight.jpg?quality=82&strip=1"
            alt="mixed roasts"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Calesita;
