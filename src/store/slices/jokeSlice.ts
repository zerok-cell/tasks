import type {RootState} from "@/store/store.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Root} from "../../../api/types.ts";

export interface JokeState {
    potions: Root[]
}

const initialState: JokeState = {
    potions:[]
}
export const jokeSlice = createSlice({
    name:"potions",
    initialState,
    reducers:{
        setPotions:(state, action:PayloadAction<Root>)=>{
            state.potions.push(action.payload)
        },
        delPotions:(state, action:PayloadAction<string>)=>{
            console.log(state.potions.map(i=>i))
        },
    }
})

export const {setPotions, delPotions} =  jokeSlice.actions;
export const selectPotions = (state:RootState) => state.potions
export default jokeSlice.reducer