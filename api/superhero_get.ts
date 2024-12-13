import axios from "axios";
import {Root} from "./types.ts";


export const getPotionWithUseId = async (id:string)=>{
    const url =`https://wizard-world-api.herokuapp.com/Elixirs/${id}`
    const request =  await axios.get(url, {timeout:100000, method:"get", headers:{

            "Access-Control-Allow-Methods": true,
            "Content-Type": "application/json"

        }})
    return await request.data

}

const getPotino = async ()=>{
    const url ='https://wizard-world-api.herokuapp.com/Elixirs/'

    const result:Root = []
        await axios.get(url, {timeout:100000, method:"get", headers:{

                "Access-Control-Allow-Methods": true,
                "Content-Type": "application/json"

            }}).then(
            items => {
                result.push(items.data)
            }
        )


    return result
}

export default getPotino;