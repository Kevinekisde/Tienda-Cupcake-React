import React from "react";
import "../style/style.scss"
import Approutes from "./Approutes";
import { Provider } from "react-redux"
import store from "../Redux/Store"

const App = () =>(
  
  <Provider store={store}>
    <Approutes/>
  </Provider>

)

export default App;
