import {Link, useParams} from "react-router";
import {Flex} from "@chakra-ui/react";
import {CSSProperties} from "@mui/material/styles/createMixins";
import {useSelector} from "react-redux";
import {selectPotions} from "@/store/slices/potionSlice.ts";

const MoreInfoPotion = ()=>{
    const param = useParams();
    const potion = useSelector(selectPotions).potions[0][0][Number(param.id)];

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
            <Link to={'/products/'}> <button>Go main page</button></Link>
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
                        ))) : (<li>No ingredients</li>)
                    }
                </ul>
            </Flex>

        </Flex>
    )
}
export default MoreInfoPotion