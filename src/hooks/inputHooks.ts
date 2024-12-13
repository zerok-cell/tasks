import {useState} from "react";

type InputFieldType =
    'text'
    | 'password'
    | 'number'
    | 'email'
    | 'url'
    | 'tel'
    | 'search'
    | 'date'
    | 'time'
    | 'datetime-local'
    | 'month'
    | 'week'
    | 'color'
    | 'file'
    | 'hidden'
    | 'checkbox'
    | 'radio'
    | 'submit'
    | 'reset'
    | 'button';

interface InputData {
    label: string;
    callback:(value:string) => void;
    typeField?:InputFieldType
}
const useDataInput = ():[string, string,string, string, string, InputData[]]=>{
    const [valueTime, setTime, ] = useState<string>('s');
    const [ingredientsPotion, setIngredients] = useState<string>('s');
    const [valueSideEffect, setSideEffect,] = useState<string>('s');
    const [valueEffect, setEffectPotion, ] = useState<string>('s');
    const [valueName, setNamePotion, ] = useState<string>('s');

    const dataFromInput:InputData[] = [{
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
            label:'Time',
            callback: setTime,
            typeField:"number",
        },
        {
            label:'Effect',
            callback: setEffectPotion,
        }]

    return [valueTime,ingredientsPotion, valueEffect, valueSideEffect, valueName, dataFromInput]
}
export {useDataInput}
