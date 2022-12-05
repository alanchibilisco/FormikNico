import {BrowserRouter, Routes, Route} from "react-router-dom"
import RouterApp from "../routes/RouterApp"
import Footer from "./components/layout/Footer"
import NavBar from "./components/layout/Navbar"



const App = () => {
  return (
    <div>
      
      <BrowserRouter>
        <NavBar/>
        
        <main>
          <RouterApp/>
        </main>  
      </BrowserRouter>

    <Footer/>
    </div>
  )
}

export default App
