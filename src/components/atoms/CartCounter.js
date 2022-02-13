import React from "react";
import {connect} from "react-redux"


const CartCounter = ( {cartLength }) =>(
    <li>
        <button className="button red-500 s-radius">{`Carrito: ${cartLength.length}`}</button>
    </li>

)

const mapStateToProps = state =>( //mapea el estado global y pasarle al cartcounter por props

    {
        cartLength : state.cart // en el estado global tenemos un array cart y le sacamos la longitud 
        
    }

)

const mapDispatchToProps = () =>({})

export default  connect(mapStateToProps, mapDispatchToProps)(CartCounter)