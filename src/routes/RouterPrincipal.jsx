import React, {useState} from "react";
import CreacionProducto from "../components/pages/CreacionProducto"
import EdicionProducto from "../components/pages/EdicionProducto"
import Error404 from "../components/pages/Error404"
import Contacto from "../components/pages/Contacto"
import Home from "../components/pages/Home"
import RecPassword from "../components/pages/RecPassword"
import TablaProducto from "../components/pages/TablaProducto"
import { Route, Routes } from 'react-router-dom';
import ProductPage from "../components/pages/ProductPage";
import Destacados from "../components/pages/Destacados";
import Favorito from "../components/pages/Favorito";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";


const RouterPrincipal = () => {

  const [showNav, setShowNav] = useState(true);


  return (
    <>
    {   showNav &&
          <nav>
            <Navbar />
          </nav>
   }
    <Routes>
        <Route exact path="/" element={<Home funcNav={setShowNav}/>} />
        <Route exact path="/recpassword" element={<RecPassword funcNav={setShowNav}/>} />
        <Route exact path="/tablaproducto" element={<TablaProducto funcNav={setShowNav}/>} />
        <Route exact path="/creacionproducto" element={<CreacionProducto funcNav={setShowNav}/>} />
        <Route exact path="/edicionproducto" element={<EdicionProducto funcNav={setShowNav}/>} />
        <Route exact path="/contacto" element={<Contacto funcNav={setShowNav}/>} />
        <Route exact path="/productpage" element={<ProductPage funcNav={setShowNav}/>} />
        <Route exact path="/destacados" element={<Destacados funcNav={setShowNav}/>} />
        <Route exact path="/favoritos" element={<Favorito funcNav={setShowNav}/>} />
        <Route exact path="*" element={<Error404 funcNav={setShowNav}/>} />
      </Routes>
      {   showNav &&
          <nav>
            <Footer />
          </nav>
   }
      </>
  );
};

export default RouterPrincipal;
