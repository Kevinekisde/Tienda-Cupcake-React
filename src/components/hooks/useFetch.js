import axios from "axios";
import {useState, useEffect} from "react"


const useFetch = (endpoint) =>{

    const [data,setData] = useState();
    

    useEffect(() => {
        axios(`https://apimocha.com/cupcakes-kev/Cupcakes`)
        .then(data => setData(data))

    },[endpoint]);

    return data




}


export default useFetch