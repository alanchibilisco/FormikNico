import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/pages/Home"
import Login from "./components/pages/Login"
import Footer from "./components/layout/Footer"
import TablaProducto from "./components/pages/TablaProducto"
import NavBar from "./components/layout/Navbar"
import CreacionProducto from "./components/pages/CreacionProducto"
import EdicionProducto from "./components/pages/EdicionProducto"
import Error404 from "./components/pages/Error404"
import Nosotros from "./components/pages/Nosotros"


const App = () => {
  return (
    <div>
      
      <BrowserRouter>
        <NavBar/>
        
        <main>
          <Routes>
            <Route exact path="/" element={<Home  />} />
            <Route exact path="/login" element={<Login  />} />
            <Route exact path="/tablaproducto" element={<TablaProducto  />}/>
            <Route exact path="/creacionproducto" element={<CreacionProducto  />}/>
            <Route exact path="/edicionproducto" element={<EdicionProducto />}/>
            <Route exact path="/sobrenosotros" element={<Nosotros />}/>
            <Route exact path="*" element={<Error404/>}/>
          </Routes>
          </main>  
      </BrowserRouter>

    <Footer/>
    </div>
  )
}

export default App
