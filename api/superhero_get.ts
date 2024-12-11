import axios from "axios";
import { Root} from "./types.ts";

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
    return result
}

export default getJoke;