import React, { useState } from "react";
import Calesita from "./Carousel/Carousel";
import { useEffect } from "react";
import instance from "../../../api/axiosUsuarios"
import { Col, Container, Row, Image } from "react-bootstrap";
import PapaNoel from "../../../image/Papanoel.png"
import CartelBeer from "../../../image/CartelBeer.jpeg"
import CartelBeer3 from "../../../image/CartelBeer3.jpg"
import CartelBeer4 from "../../../image/CartelBeer4.jpeg"
import CardProducto from "./CardProducto/CardProducto";
import ipa from '../../../assets/img/imgHome/IPA1.jpg'
import Lagers from '../../../assets/img/imgHome/amberLager.webp'
import Porter from '../../../assets/img/imgHome/porter.png'
import Stout from '../../../assets/img/imgHome/stout.jfif'
import Apa from '../../../assets/img/imgHome/apa.jpg'
import Honey from '../../../assets/img/imgHome/honey.jpg'
import Scottisch from '../../../assets/img/imgHome/Scottisch.jfif'

const Home = (props) => {

  const getUSer = async (token) => {
    const config = {
      headers: {
        "authorization": `Bearer ${token}`
      }
    }
    try {
      const resp = await instance.get("/users/info", config);
      props.setUserDate(resp.data)
    } catch (error) {

    }
  }

  useEffect(() => {
    const user_token = localStorage.getItem("token");
    if (user_token) {
      getUSer(user_token)
    }
  }, [props.userdata])

  useEffect(() => {
    props.funcNav(true)
  }, [])
  

  return (
    <div>
      {/* Carousel */}
      <Calesita />
      {props.userdata && <>
        <Container >
          <Row >
            <Col className="text-center" xs={12} md={6} lg={4}>
              <div className=" d-flex mx-2 my-2 ">
                <img src={CartelBeer} alt="CartelBeer" width="300" className="d-none d-lg-block" />
              </div>
            </Col>
            <Col className="text-center" xs={12} md={12} lg={4}>
              <div className="mt-5">
                <h1 className="mt-5 my-2 text-warning">Bienvenido : {props.userdata.name} </h1>
                <p className=" mt-5 fw-bolder">Email : {props.userdata.email} </p>
                <p className="fw-bolder">Role : {props.userdata.role} </p>
                <h3 className=" mt-5 fw-bolder text-dark">Beer les desea una</h3>
                <img src={PapaNoel} alt="papanoel" style={{ maxWidth: '100%'}} />
                <h1 className=" text-warning">SALUD!!!</h1>
              </div>
            </Col>
            <Col className="d-flex" xs={12} md={6} lg={4}>
              <div className="mx-auto mt-3 text-center">
                <img src={CartelBeer3} alt="CartelBeer3" width="300" className="d-none d-lg-block mb-4" />
                <img src={CartelBeer4} alt="CartelBeer4" width="300" className="d-none d-lg-block" />
              </div>
            </Col>
            <Col className="text-center" xs={6} md={3} lg={2}> 
              <div className="d-flex mt-5">
                
              </div>       
            </Col>
          </Row>
          {/* Products */}
          <Row>
            <Col xs={12} sm={6} md={4} lg={3} className="mb-5">
              <CardProducto img={ipa} name="Ipa" text="poner algo aqui" graduation="3%" price="100" category="Cerveceria" id="1" />
            </Col>
            <Col xs={12} sm={6} md={4} lg={3} className="mb-5">
              <CardProducto img={Lagers} name="Lagers" text="poner algo aqui" graduation="4%" price="250" category="Cerveceria" id="2" />
            </Col>
            <Col xs={12} sm={6} md={4} lg={3} className="mb-5">
              <CardProducto img={Porter} name="Porter" text="poner algo aqui" graduation="1%" price="300" category="Cerveceria" id="3" />
            </Col>
            <Col xs={12} sm={6} md={4} lg={3} className="mb-5">
              <CardProducto img={Stout} name="Stout" text="poner algo aqui" graduation="2%" price="450" category="Cerveceria" id="4" />
            </Col>
            <Col xs={12} sm={6} md={4} lg={3} className="mb-5">
              <CardProducto img={Apa} name="Apa" text="poner algo aqui" graduation="5%" price="200" category="Cerveceria" id="5" />
            </Col>
            <Col xs={12} sm={6} md={4} lg={3} className="mb-5">
              <CardProducto img={Honey} name="Honey" text="poner algo aqui" graduation="3%" price="150" category="Cerveceria" id="6" />
            </Col>
            <Col xs={12} sm={6} md={4} lg={3} className="mb-5">
              <CardProducto img={Scottisch} name="Scottisch" text="poner algo aqui" graduation="4%" price="350" category="Cerveceria" id="7" />
            </Col>
          </Row>
        
        </Container>
      </>}
      

    </div>
  );
};

export default Home;