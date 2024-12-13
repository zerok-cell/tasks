import {Root2} from "../../api/types.ts";
import {Flex} from "@chakra-ui/react";
import "./card.scss"
import {HiHeart} from 'react-icons/hi'
import {useDispatch, useSelector} from "react-redux";
import {delPotions, selectPotions} from "@/store/slices/potionSlice.ts";
import StarIcon from '@mui/icons-material/Star';
import {addFavorites} from "@/store/slices/filterSlice.ts";
import {Link} from "react-router";

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

    const addToFavorite = ()=>{
        dispatch(addFavorites(potions.potions[0][0][id]))
    }

    return (
        <Flex  gap={2} direction="row" justify="center" className={"card"}>

            <Flex direction="column" justify="center" alignItems="start">
                <Link className={'no-a-style'} to={`/products/${id}`}>
                    <p>{data.name.slice(0, 11,)}...</p>
                </Link>
                    <button onMouseUp={deleteCard}>Delete</button>


            </Flex>


    <Flex className={"heart-flex"} alignItems="end">
                <HiHeart onClick={setLike} className={'heart'}/>
            </Flex>
            <Flex justify="center" direction={'column'} alignItems="start">
                <Flex justify="end" direction={'row'} alignItems="start">
                    <button onMouseUp={addToFavorite}><StarIcon/></button>
                </Flex>
                <Link className={'no-a-style'} to={`/products/${id}`}>
                <button>{">"}</button>
                </Link>

            </Flex>
        </Flex>
    )
}

export default CardPotion