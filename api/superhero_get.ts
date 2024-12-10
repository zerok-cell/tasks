import axios from "axios";

const getJoke = async ()=>{
    const url ='https://geek-jokes.sameerkumar.website/api?format=json/'

    const result:string[] = []
    for (let i = 0; i<10;i++){
        await axios.get(url, {timeout:100000, method:"get", headers:{
                "Access-Control-Allow-Credentials": true,
                "Content-Type": "application/json"

            }}).then(
            items => {
                console.log(items);
                result.push(String(items.data))
            }
        )
    }
    return result
}

export default getJoke;