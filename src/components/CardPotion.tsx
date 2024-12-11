import {Root2} from "../../api/types.ts";
import {Flex} from "@chakra-ui/react";
import "./card.scss"
import {HiHeart} from 'react-icons/hi'
import {useDispatch} from "react-redux";
import {delPotions} from "@/store/slices/jokeSlice.ts";
const CardPotion = ({id,data}:{id:string,data:Root2})=>{
    const dispatch = useDispatch();

    const setLike = (e: React.MouseEvent<SVGElement>)=>{
        e.currentTarget.style.color = e.currentTarget.style.color === "white"?"#ff7878":"white";

    }
    const deleteCard = () =>{
        dispatch(delPotions(id))
    }

    return (
        <Flex marginBottom={2} direction="row" justify="center" className={"card"} >
            <Flex direction="column" justify="center" alignItems="start">
                {/*{data.effect ? (<p><b>Effect</b>:{data.effect}</p>) : (<p>No effect</p>)}*/}
                <p>{data.name}</p>
                <button onMouseUp={deleteCard}>del</button>
                {/*{data.sideEffects? (<p><b>Side Effect</b>{data.sideEffects}</p>):(<p><b>Not side effect</b></p>)}*/}
            </Flex>
            <Flex className={"heart-flex"} alignItems="end">
                <HiHeart onClick={setLike} className={'heart'}/>
            </Flex>
        </Flex>
    )
}

export default CardPotion