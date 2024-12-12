import axios from "axios";
import {Root, Root2} from "./types.ts";

const destructApi = (massiv:Root) =>{
    const result:Root2[] = []
    massiv.map(
        item=>item.map(
            (i)=>{
                result.push(i)
            }
        )
    )
    return result
}

const getJoke = async ()=>{
    const url ='https://wizard-world-api.herokuapp.com/Elixirs/'

    const result:Root = []
    // for (let i = 0; i<10;i++){
        await axios.get(url, {timeout:100000, method:"get", headers:{

                "Access-Control-Allow-Methods": true,
                "Content-Type": "application/json"

            }}).then(
            items => {
                result.push(items.data)
            }
        )
    // }
    console.log(result)

    // console.log(destructApi(result[1][1].))
    return result
}

export default getJoke;