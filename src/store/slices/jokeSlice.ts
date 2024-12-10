import type {RootState} from "@/store/store.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import maxNum from "@/lib/maxNum.ts";

export interface JokeState {
    joke: {
        [key: number]: string;
    };
}

const initialState: JokeState = {
    joke: {},
}
export const jokeSlice = createSlice({
    name:"joke",
    initialState,
    reducers:{
        setJoke:(state, action:PayloadAction<string>)=>{
            state.joke[maxNum(state.joke)] = action.payload;
        },
        deleteJoke:(state, action:PayloadAction<number>)=>{
            delete state.joke[action.payload]
        },
    }
})

export const {setJoke, deleteJoke} =  jokeSlice.actions;
export const selectJoke = (state:RootState) => state.joke
export default jokeSlice.reducer