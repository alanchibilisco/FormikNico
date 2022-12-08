import React from "react";
import CreacionProducto from "../src/components/pages/CreacionProducto"
import EdicionProducto from "../src/components/pages/EdicionProducto"
import Error404 from "../src/components/pages/Error404"
import Contacto from "../src/components/pages/Contacto"
import Home from "../src/components/pages/Home"
import RecPassword from "../src/components/pages/RecPassword"
import TablaProducto from "../src/components/pages/TablaProducto"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductPage from "../src/components/pages/ProductPage";
import NavBar from "../src/components/layout/Navbar/Navbar";
import Destacados from "../src/components/pages/Destacados";
import Favorito from "../src/components/pages/Favorito";
import Footer from "../src/components/layout/Footer";
import Headers from "../src/components/layout/Headers";


const RouterPrincipal = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Headers />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/recpassword" element={<RecPassword />} />
        <Route exact path="/tablaproducto" element={<TablaProducto />} />
        <Route exact path="/creacionproducto" element={<CreacionProducto />} />
        <Route exact path="/edicionproducto" element={<EdicionProducto />} />
        <Route exact path="/contacto" element={<Contacto />} />
        <Route exact path="/productpage" element={<ProductPage />} />
        <Route exact path="/destacados" element={<Destacados />} />
        <Route exact path="/favoritos" element={<Favorito />} />
        <Route exact path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default RouterPrincipal;
