import {useParams} from "react-router";

import {getPotionWithUseId} from "../../api/superhero_get.ts";
import {useEffect, useState} from "react";
import {Flex} from "@chakra-ui/react";
import {Root2} from "../../api/types.ts";
import {CSSProperties} from "@mui/material/styles/createMixins";

const MoreInfoPotion = ()=>{
    const param = useParams();
    const [potion, setPotion] = useState<Root2>()

    useEffect(() => {
        const getAndSetItem =async ()=>{
            const result = param.id !== undefined ? await getPotionWithUseId(param.id): null
            setPotion(result)
        }

            getAndSetItem()
    }, []);

    const styleFromEffectsBlock:CSSProperties = {
        background:"#0C0C0D",
        padding:10,
        borderRadius:10,
    }
    const styleFromName:CSSProperties = {
        background:"#161616",
        borderRadius:10,
        padding:10,



    }

    return (

        <Flex gap={4}>
            <button>Go main page</button>
            <Flex  justify={'center'} alignItems={'center'} style={styleFromName}>

                <h1>{potion?.name}</h1>
            </Flex>
            <Flex style={styleFromEffectsBlock} direction={'column'}>
                {potion?.effect ? (<p><b>Effect</b>:{potion.effect}</p>) : (<p>No effect</p>)}
                {potion?.sideEffects ? (<p><b>Side Effect</b>{potion.sideEffects}</p>) : (
                    <p><b>Not side effect</b></p>)}
                {potion?.time ? (<p>Action time: {potion?.time}</p>) : (<p>Unknown action time</p>)}
                <ul>
                    <li><h1>Ingredients:</h1></li>
                    {
                        potion?.ingredients ? (potion.ingredients.map((ingredient) => (
                            <li key={ingredient.id}>{ingredient.name}</li>
                        ))) : (<p>No ingredients</p>)
                    }
                </ul>
            </Flex>

        </Flex>
    )
}
export default MoreInfoPotion