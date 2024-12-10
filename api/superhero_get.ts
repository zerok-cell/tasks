import axios from "axios";

const getJoke = async ()=>{
    const url ='https://wizard-world-api.herokuapp.com/Elixirs/'

    const result:string[] = []
    // for (let i = 0; i<10;i++){
        await axios.get(url, {timeout:100000, method:"get", headers:{
                "Access-Control-Allow-Methods": true,
                "Content-Type": "application/json"

            }}).then(
            items => {
                result.push(String(items.data))
            }
        )
    // }
    return result
}

export default getJoke;