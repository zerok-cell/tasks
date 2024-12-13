import type {RootState} from "@/store/store.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Root, Root2} from "../../../api/types.ts";

export interface JokeState {
    potions: Root[]
}

const initialState: JokeState = {
    potions:[]
}
export const potionSlice = createSlice({
    name:"potions",
    initialState,
    reducers:{
        setPotions:(state, action:PayloadAction<Root>)=> {
            console.log(action.payload)
            state.potions.push(action.payload)

        },
        delPotions:(state, action:PayloadAction<number>)=>{
            state.potions[0][0].splice(action.payload,1)


        },
    }
})

export const {setPotions, delPotions} =  potionSlice.actions;
export const selectPotions = (state:RootState) => state.potions
export default potionSlice.reducer