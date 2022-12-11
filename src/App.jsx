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


//     <BrowserRouter>
//   <Switch>
//      <Route exact path="/notfound" component={Pagenotfound} />
//      <Route>
//        <div className="container">
//           <Navbar />
//             <Switch>
//              <Route exact path="/" component={Home} />
//              <Route exact path="/about" component={About} />
//              <Route exact path="/contact" component={Contact} />
//              <Redirect to="/notfound"/>
//            </Switch>
//        </div>
//     </Route>

//   </Switch>

// </BrowserRouter>
  )
}

export default App
