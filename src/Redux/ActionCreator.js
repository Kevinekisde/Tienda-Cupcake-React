//Son las funciones que crean las acciones
//Necesito una funcion que cuando le de click a un cupckae  se agregue uno al carrito
import { ADD_TO_CART,DELETE_FROM_CART } from "./Actions"

const addToCart = id => ({ //Creamos un bojeto que tendra la accion y la id

    type: ADD_TO_CART,  
    id:id

})

const deleteFromCart = id => ({ 
    type: DELETE_FROM_CART,
    id:id
})



export {addToCart,deleteFromCart}