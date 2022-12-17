import React, { useState } from "react";
import Calesita from "./Carousel/Carousel";
import { useEffect } from "react";
import instance from "../../../api/axiosUsuarios"
import { Col, Container, Row } from "react-bootstrap";
import PapaNoel from "../../../image/Papanoel.png"
import CartelBeer from "../../../image/CartelBeer.jpeg"
import CartelBeer2 from "../../../image/CartelBeer2.jpg"

const Home = (props) => {
  props.funcNav(true)
  const [userdata , setUserDate] = useState("")

    const getUSer = async(token) =>{
     const config ={
         headers:{
             "authorization" : `Bearer ${token}`
         }
     }
     try {
         const resp = await instance.get("/users/info", config );
        setUserDate(resp.data)
     } catch (error) {
         
     }
    } 
 
    useEffect(() => {
     const user_token = localStorage.getItem("token");
         if (user_token) {
             getUSer(user_token)
         }
    }, [])
  
  return (
    <div>
      {/* Carousel */}
      <Calesita />
      {userdata && <>
          <Container >
            <Row >
          <Col className="text-center" xs={12} md={6} lg={4}>
          <div className=" d-flex mx-2 my-2 ">
          <img src={CartelBeer} alt="CartelBeer" width="300" className="d-none d-md-block" />
          </div>  
          </Col>
          <Col className="text-center" xs={12} md={6} lg={4}>
          <div className="mt-5">
          <h1 className="mt-5 my-2 text-warning">Bienvenido : {userdata.name} </h1>
            <p className=" mt-5 fw-bolder">Email : {userdata.email} </p>
            <p className="fw-bolder">Role : {userdata.role} </p>
            <h3 className=" mt-5 fw-bolder text-dark">Beer les desea una</h3>
          <img src={PapaNoel} alt="papanoel" width="300" />
          <h1 className=" text-warning">SALUD!!!</h1>
          </div>
          </Col>
          <Col className="text-center" xs={12} md={6} lg={4}>
          <div className="mt-5">
          
          <img src={CartelBeer2} alt="CartelBeer2" width="300" className="d-none d-md-block"/>
          </div>
          </Col>
           
          
          
        </Row>
        </Container>
      </>}
      {/* Products */}
    
    </div>
  );
};

export default Home;