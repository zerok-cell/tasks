import {useSelector} from "react-redux";
import {selectFavorites} from "@/store/slices/filterSlice.ts";
import CardPotion from "@/components/CardPotion.tsx";

const FavoritCard = ()=>{
    const cards = useSelector(selectFavorites)
    console.log(cards)
    return (
        <>
            {cards[0].map((item,key)=>(
                <CardPotion id={key} key={key} data={item}/>
                )

            )}
        </>
    )
}

export default FavoritCard