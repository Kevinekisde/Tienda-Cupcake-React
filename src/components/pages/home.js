import Cupcake from "./cupcake";
import Banner from "../section/Banner";
import Servicios from "../section/Servicios";

const Home = () =>(
  <>
    <Banner></Banner>
    <Cupcake peticion="Cupcakes?Precio_like=1500"/>
    <Servicios peticion="servicios"></Servicios>
    
  </>
)

export default Home