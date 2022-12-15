import React, { useState } from "react";
import Calesita from "./Carousel/Carousel";
import { useEffect } from "react";
import instance from "../../../api/axiosUsuarios"
import { Col, Row } from "react-bootstrap";
import PapaNoel from "../../../image/Papanoel.png"

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
        <Row>
          <Col className=" text-center" xs={12} md={6} lg={2}>
          <img src={PapaNoel} alt="papanoel" width="300" />
            <p >Bienvenido : {userdata.name} </p>
            <p>Email : {userdata.email} </p>
          </Col>
        </Row>
        
      </>}
      {/* Products */}
    
    </div>
  );
};

export default Home;