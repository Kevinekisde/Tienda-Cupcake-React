import{useState} from 'react'

const Cupcakes = ({imagen,Descripcion,Sabor,Color,Precio,estado}) =>{
    const [vendido, setVendido] = useState(false)
    const vender = () => {
        setVendido(true)

    }
    return(
        <div className="s-radius-1 s-shadow-bottom background s-shadow-card-micro white-color s-pxy-2 s-bg-white s-pxy-2">
            <img src={imagen} alt=""/>

            <p>{Descripcion}</p>

            <span> <b>Color: {Color} </b></span>
            <br></br>
            <span> <b> Sabor: {Sabor}</b> </span>
            <br></br>
            <span><b>Precio: {Precio} </b> </span>
            <br></br>
            <p>
            <b> Estado: </b>
            {
                vendido ? "Vendido" : "A la venta"
            }
        </p>
            {
                !vendido && <button className = "button blue-500"onClick={vender}>Comprar</button>
            }
        </div>
    )

    
}


export default Cupcakes