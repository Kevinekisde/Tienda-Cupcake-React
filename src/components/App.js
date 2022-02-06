import Header from "./section/Header";
import Home from "./pages/home";
import Cupcake from "./pages/cupcake";
import AboutUS from "./pages/aboutUs";
import "../style/style.scss"
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

const App = () =>(
  <Router> 
  <Header />

  <Routes>

    <Route path="/cupcake"element={<Cupcake peticion="Cupcakes" title></Cupcake>}/>
    <Route path="/nosotros" element={<AboutUS></AboutUS>}/>
    <Route path="/" element={<Home></Home>}/>

  </Routes>
  </Router>

)

export default App;
