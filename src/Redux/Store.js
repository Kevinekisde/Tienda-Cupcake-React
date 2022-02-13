import { createStore } from "redux";
import { ADD_TO_CART,DELETE_FROM_CART } from "./Actions"; //importamos store
import {composeWithDevTools} from "redux-devtools-extension"


const initialStore = {
    cart : [] // inciamos el carrito vacio
}

const rootReducer = (state = initialStore,/*action*/{type,id}) =>{  //?recibe dos parametros el estado y la accion y retorna una funcion
    
    if(type === ADD_TO_CART){                 //si la accion es igual a añadir al carro
                                                
        
        return {                                     // retornara todo lo de state pero a cart le concatenara la id
            ...state,
            cart: state.cart.concat(id)
        }
    }

    if(type === DELETE_FROM_CART){
        return{
            ...state,
            cart : state.cart.filter(c => c !== id)
        }

    } 
    return state
}

export default createStore(rootReducer, composeWithDevTools())
