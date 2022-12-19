import React, { useState } from "react";
import Calesita from "./Carousel/Carousel";
import { useEffect } from "react";
import instance from "../../../api/axiosUsuarios"
import { Col, Container, Row, Image } from "react-bootstrap";
import PapaNoel from "../../../image/Papanoel.png"
import CartelBeer from "../../../image/CartelBeer.jpeg"
import CartelBeer2 from "../../../image/CartelBeer2.jpg"
// import publicidad from "../../../assets/publicidad.png"

const Home = (props) => {
  props.funcNav(true)

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

  return (
    <div>
      {/* Carousel */}
      <Calesita />
      {props.userdata && <>
        <Container >
          <Row >
            <Col className="text-center" xs={12} md={6} lg={4}>
              <div className=" d-flex mx-2 my-2 ">
                <img src={CartelBeer} alt="CartelBeer" width="300" className="d-none d-md-block" />
              </div>
            </Col>
            <Col className="text-center" xs={12} md={6} lg={4}>
              <div className="mt-5">
                <h1 className="mt-5 my-2 text-warning">Bienvenido : {props.userdata.name} </h1>
                <p className=" mt-5 fw-bolder">Email : {props.userdata.email} </p>
                <p className="fw-bolder">Role : {props.userdata.role} </p>
                <h3 className=" mt-5 fw-bolder text-dark">Beer les desea una</h3>
                <img src={PapaNoel} alt="papanoel" width="300" />
                <h1 className=" text-warning">SALUD!!!</h1>
              </div>
            </Col>
            <Col className="text-center" xs={12} md={6} lg={4}>
              <div className="mt-5">

                <img src={CartelBeer2} alt="CartelBeer2" width="300" className="d-none d-md-block" />
              </div>
            </Col>
          </Row>
            {/* <Image className='my-3' src={publicidad} alt="publicidad" /> */}
        </Container>
      </>}
      {/* Products */}

    </div>
  );
};

export default Home;