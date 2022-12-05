import React from "react";
import CreacionProducto from "../src/components/pages/CreacionProducto"
import EdicionProducto from "../src/components/pages/EdicionProducto"
import Error404 from "../src/components/pages/Error404"
import Nosotros from "../src/components/pages/Nosotros"
import Home from "../src/components/pages/Home"
import Login from "../src/components/pages/Login"
import TablaProducto from "../src/components/pages/TablaProducto"
import { Route, Routes } from "react-router-dom";

const RouterApp = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/tablaproducto" element={<TablaProducto />} />
      <Route exact path="/creacionproducto" element={<CreacionProducto />} />
      <Route exact path="/edicionproducto" element={<EdicionProducto />} />
      <Route exact path="/sobrenosotros" element={<Nosotros />} />
      <Route exact path="*" element={<Error404 />} />
    </Routes>
  );
};

export default RouterApp;
