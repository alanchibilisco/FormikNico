import React, {useEffect, useState} from "react";
import CreacionProducto from "../components/pages/CreacionProducto"
import EdicionProducto from "../components/pages/EdicionProducto"
import EdicionUsuario from "../components/pages/EdicionUsuario/EdicionUsuario";
import Error404 from "../components/pages/Error404"
import Contacto from "../components/pages/Contacto"
import Home from "../components/pages/Home"
import RecPassword from "../components/pages/RecPassword"
import { Route, Routes } from 'react-router-dom';
import ProductPage from "../components/pages/ProductPage";
import Destacados from "../components/pages/Destacados";
import Favorito from "../components/pages/Favorito";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import TablaUsuarios from "../components/pages/TablaUsuarios/TablaUsuarios";
import TablaProducto from "../components/pages/TablaProducto/Producto/TablaProducto";



const RouterPrincipal = () => {
  const [showNav, setShowNav] = useState(true);
  const [userdata , setUserDate] = useState("");
 
 
  return (


    <>
    {   showNav &&
          <nav className="sticky-top">
            <Navbar setUserDate={setUserDate} />
          </nav>
   }
    <Routes>
        <Route exact path="/" element={<Home funcNav={setShowNav} userdata={userdata} setUserDate={setUserDate} />} />
        <Route exact path="/recpassword" element={<RecPassword funcNav={setShowNav}/>} />
        <Route exact path="/tablaproducto" element={<TablaProducto funcNav={setShowNav}/>} />
        <Route exact path="/tablaUsuario" element={<TablaUsuarios funcNav={setShowNav}/>} />
        <Route exact path="/creacionproducto" element={<CreacionProducto funcNav={setShowNav}/>} />
        <Route exact path="/edicionproducto/:id" element={<EdicionProducto funcNav={setShowNav}/>} /> 
        <Route exact path="/edicionUsuario/:id" element={<EdicionUsuario funcNav={setShowNav}/>} /> 
        <Route exact path="/contacto" element={<Contacto funcNav={setShowNav}/>} />
        <Route exact path="/productpage" element={<ProductPage funcNav={setShowNav}/>} />
        <Route exact path="/destacados" element={<Destacados funcNav={setShowNav}/>} />
        <Route exact path="/favoritos" element={<Favorito funcNav={setShowNav}/>} />
        <Route exact path="*" element={<Error404 funcNav={setShowNav}/>} />

        <Route path="/tablausuarios" element={<TablaUsuarios/>}></Route>

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
