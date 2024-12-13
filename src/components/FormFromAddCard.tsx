import {Flex} from "@chakra-ui/react";
import {useDispatch, useSelector,} from "react-redux";
import {selectPotions,  updatePotions} from "@/store/slices/potionSlice.ts";
import {Root2} from "../../api/types.ts";
import {Link} from "react-router";
import {useDataInput} from "@/hooks/inputHooks.ts"
import {FormEvent} from "react";


const FormFromAddCard = ()=>{
    const [valueTime,ingredientsPotion, valueEffect, valueSideEffect, valueName, dataFromInput] = useDataInput()
    const dispatch = useDispatch();
    const potions = useSelector(selectPotions);



    const createCard = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const ingredients = ingredientsPotion.split(' ').map((item, index)=>{
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

        dispatch(updatePotions(result))
        console.log(potions.potions)


    }



    return (

        <Flex direction={'column'}>
            <Link to={'/products/'}><button>Home Page</button></Link>
            <form onSubmit={createCard}>
                <Flex direction={'column'} justify={'center'} gap={10} alignItems={'center'}>
                    {dataFromInput.map((item,index)=>(
                        <label key={index}>{item.label}

                            <input required onChange={(e)=>item.callback(e.target.value)} type={item?.typeField ? item.typeField: "text" }/>
                        </label>
                    ))}

                </Flex>
                <input  type="submit" />
            </form>
        </Flex>
    )
}
export default FormFromAddCard;