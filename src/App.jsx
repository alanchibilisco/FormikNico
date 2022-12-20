import RouterPrincipal from "./routes/RouterPrincipal"
import { BrowserRouter } from "react-router-dom";


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
