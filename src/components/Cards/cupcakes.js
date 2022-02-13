
import {addToCart,deleteFromCart} from '../../Redux/ActionCreator'
import { connect } from 'react-redux'

const Cupcakes = ({id,imagen,Descripcion,Sabor,Color,Precio,cart,addCourseToCart,deleteCourseFromCart}) =>{
    

    

    return(
        <div  className="s-radius-1 s-shadow-bottom background s-shadow-card-micro white-color s-pxy-2 s-bg-white s-pxy-2">
            <img src={imagen} alt=""/>

            <p>{Descripcion}</p>

            <span> <b>Color: {Color} </b></span>
            <br></br>
            <span> <b> Sabor: {Sabor}</b> </span>
            <br></br>
            <span><b>Precio: {Precio} </b> </span>
            <br></br>
            {
                cart.find(a => a === id)
                ?
                <button 
                className = "button red-500 s-shadow"
                onClick={()=> deleteCourseFromCart(id)}>
                    Remover del carrito
                    </button>
                :
                <button 
                className = "button blue-500 s-shadow" 
                onClick={()=> addCourseToCart(id)}>
                Comprar

                </button>
                

            }
        </div>
    )
   
    
}



const mapStateToProps= state => ({
    cart: state.cart
})

const mapDispatchToProps = dispatch => ({ //recibe un dispatch
    addCourseToCart(id){
        dispatch(addToCart(id))
    },
    deleteCourseFromCart(id){
        dispatch(deleteFromCart(id))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Cupcakes)