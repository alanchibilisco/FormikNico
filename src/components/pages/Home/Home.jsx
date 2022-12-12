import React from "react";
import Calesita from "./Carousel/Carousel";

const Home = (props) => {
  props.funcNav(true)
  return (
    <div>
      {/* Carousel */}
      <Calesita />
      {/* Products */}
    
    </div>
  );
};

export default Home;