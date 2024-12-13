import {Flex} from "@chakra-ui/react";
import { useState} from "react";
import {useDispatch, useSelector,} from "react-redux";
import {selectPotions, setPotions, updatePotions} from "@/store/slices/potionSlice.ts";
import {Root2} from "../../api/types.ts";
import {Link, redirect} from "react-router";

const useInput = ()=>{
    const [valueInput, setValueInput] = useState<string>('');
    const spliter = ()=>valueInput.split(' ')
    return  [ valueInput,setValueInput, spliter] as const

}

const FormFromAddCard = ()=>{
    const [valueTime, setTime, ] = useInput();
    const [, setIngredients, spliterIngridients] = useInput();
    const [valueSideEffect, setSideEffect,] = useInput();
    const [valueEffect, setEffectPotion, ] = useInput();
    const [valueName, setNamePotion, ] = useInput();
    const dispatch = useDispatch();
    const potions = useSelector(selectPotions);

    const data = [{
        label:'Name potion',
        callback: setNamePotion,
    },{
        label:'Ingredients',
        callback: setIngredients,
    },{
        label:'Side Effect',
        callback: setSideEffect,
    },
        {
            label:'Side Time',
            callback: setTime,
        },
        {
            label:'Effect',
            callback: setEffectPotion,
        }]
    const createCard = (e)=>{
        e.preventDefault()
        const ingredients = spliterIngridients().map((item, index)=>{

            return {id:index+item, name:item}
        })

        const result:Root2 = {
            id:`${valueName}${valueTime}`,
            name: valueName,
            ingredients: ingredients,
            time:valueTime,
            sideEffects: valueSideEffect,
            effect: valueEffect,
            difficulty:'',
            inventors: []


        }
        console.log(result)
        potions.potions[0][0].push(result)
        dispatch(setPotions(potions.potions))


    }



    return (

        <Flex direction={'column'}>
            <Link to={'/products/'}><button>Home Page</button></Link>
            <form onSubmit={createCard}>
                <Flex direction={'column'} justify={'center'} gap={10} alignItems={'center'}>
                    {data.map((item,index)=>(
                        <label key={index}>{item.label}

                            <input onChange={(e)=>item.callback(e.target.value)} type="text"/>
                        </label>
                    ))}

                </Flex>
                <input  type="submit" />
            </form>
        </Flex>
    )
}
export default FormFromAddCard;