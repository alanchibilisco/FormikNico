import RouterPrincipal from "./routes/RouterPrincipal"
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <main>
        <RouterPrincipal/>
      </main>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
