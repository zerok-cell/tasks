import {Spinner, Flex} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import getJoke from "../api/superhero_get.ts";
import {useDispatch, useSelector} from "react-redux";
import {selectPotions, setPotions} from "@/store/slices/potionSlice.ts";
import CardPotion from "@/components/CardPotion.tsx";
import {selectStatus} from "@/store/slices/filterSlice.ts";
import Filters from "@/components/Filters.tsx";
import FavoritCard from "@/components/FavoritCard.tsx";


const CardsNews = () => {
    const dispatch = useDispatch();
    const [error, setError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const potions  = useSelector(selectPotions);
    const status = useSelector(selectStatus);


    const getPotion = async ()=>{
        if(potions.potions.length === 0){

            try {
                const result = await getJoke()
                dispatch(setPotions(result))
                setError(false)
                setLoading(false);


            }catch{
                setLoading(false);
                setError(true)
            }
        }else {
            setLoading(false);
        }
    }

    useEffect(() => {
        getPotion()

    }, [getPotion]);

    if (loading) {
        return <Spinner />;
    }
    if (error){
        return (
            <p>
                Oh Nooo error
                <button onMouseUp={getPotion}> Повторить запрос</button>
            </p>
        )
    }

    return (
        <>
            <h1>Potion Harry Potter</h1>
            <Filters/>

            <Flex direction="row" justify="space-between" wrap={'wrap'}>
                {status ? (potions.potions.map((potion) => (
                    potion.map((potion)=>(
                        potion.map((potion, key) => {
                            return (<CardPotion id={key} key={key} data={potion} />)
            })
                    ))
                ))): <FavoritCard/>}
            </Flex>

        </>
    );
};

export default CardsNews;