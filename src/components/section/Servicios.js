import useFetch from "../hooks/useFetch"

const Servicios = ({peticion}) =>{

    const data = useFetch(peticion)


    if(!data){
        return <span>No hay servicios</span>
    }
    return(

        <div className="ed-grid s-grid-2 m-grid-2 lg-grid-2 row-gap">
            {
                data.map(s=>(
                    <div key = {s.id}>
                        <img src={s.imagen} alt=""></img>
                        <h2>{s.Nombre}</h2>
                        <p>{s.Descripcion}</p>
                    </div>
                ))
            }
        </div>
    )
}


export default Servicios