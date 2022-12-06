import React from "react";
import { Carousel } from "react-bootstrap";


const Calesita = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src="https://images.pexels.com/photos/13224174/pexels-photo-13224174.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="cafe"
          />
          <Carousel.Caption>
            <h3>La mejor Cerveza</h3>
            <p>Disfruta con amigos</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/1267323/pexels-photo-1267323.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="croissant"
          />
          <Carousel.Caption>
            <h3>Deja de pensar en Ella</h3>
            <p>No le mandes msj a tu ex</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/1267684/pexels-photo-1267684.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="mixed roasts"
          />
          <Carousel.Caption>
            <h3>Malta Seleccionada</h3>
            <p>Pensamos en Calidad y en Vos</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Calesita;
