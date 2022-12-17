import RouterPrincipal from "./routes/RouterPrincipal"
import { BrowserRouter } from "react-router-dom";
// import Navbar from "./components/layout/Navbar";
// import Footer from "./components/layout/Footer";


const App = () => {
  return (
    <div>
      <BrowserRouter>
      
      <main>
        <RouterPrincipal/>
      </main>
    
      </BrowserRouter>
    </div>
  )
}

export default App
