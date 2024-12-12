import {Root2} from "../../api/types.ts";
import {Flex} from "@chakra-ui/react";
import "./card.scss"
import {HiHeart} from 'react-icons/hi'
import {useDispatch, useSelector} from "react-redux";
import {delPotions, selectPotions, setPotions} from "@/store/slices/jokeSlice.ts";
const CardPotion = ({id,data}:{id:number,data:Root2})=>{
    const dispatch = useDispatch();
    const result:Root2[][] = [[]]
    const potions  = useSelector(selectPotions);
    const setLike = (e: React.MouseEvent<SVGElement>)=>{
        e.currentTarget.style.color = e.currentTarget.style.color === "white"?"#ff7878":"white";

    }
    const deleteCard = () =>{
        console.log(id)
        dispatch(delPotions(id))
        for (const potion of potions.potions[0][0]){
            result[0].push(potion)
        }


    }

    return (
        <Flex marginBottom={2} gap={2} direction="row" justify="center" className={"card"}>
            <Flex direction="column" justify="center" alignItems="start">
                {/*{data.effect ? (<p><b>Effect</b>:{data.effect}</p>) : (<p>No effect</p>)}*/}
                <p>{data.name.slice(0, 15,)}...</p>
                <button onMouseUp={deleteCard}>Delete</button>

                {/*{data.sideEffects? (<p><b>Side Effect</b>{data.sideEffects}</p>):(<p><b>Not side effect</b></p>)}*/}
            </Flex>

            <Flex className={"heart-flex"} alignItems="end">
                <HiHeart onClick={setLike} className={'heart'}/>
            </Flex>
            <Flex justify="center" alignItems="start">
                <button onMouseUp={deleteCard}>{">"}</button>
            </Flex>
        </Flex>
    )
}

export default CardPotion