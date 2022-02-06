import  Cupcakes from "../Cards/cupcakes"
import useFetch from "../hooks/useFetch"




const Cupcake = ({peticion,title}) =>{
    
 

    const data = useFetch(peticion)


    return(
        <div className="ed-grid">
            {title && <h1 className ="s-center m-center lg-center">Productos</h1>}
            {
                data ? (
                <section className="ed-grid s-grid-2 m-grid-3 lg-grid-4 row-gap">
                {
                 data.map(({id,imagen,Descripcion,Sabor,Color,Precio,vendido}) => (
                    <Cupcakes 
                    key = {id}
                    imagen = {imagen}
                    Descripcion = {Descripcion}
                    Color = {Color}
                    Precio = {Precio}
                    Sabor = {Sabor}
                    vendido = {vendido}
                    />
                  )) // recorremos el array cupcakes para renderizar un cupcake
                }
                </section>
                ) : (
                <section>
                <span>Cargando...</span>
                </section>
            )

            }
        </div>
    )
}


export default Cupcake