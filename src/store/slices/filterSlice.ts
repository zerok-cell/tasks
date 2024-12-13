import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Root, Root2} from "../../../api/types.ts";
import type {RootState} from "@/store/store.ts";

interface filterSliceState  {
    status: 1 | 0, // 1-All carad, and zero favorites card.
    favorites: Root,

}
const initialState: filterSliceState = {
    status: 1,
    favorites: [[]]
}

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers:{
        swap:(state, action:PayloadAction<1|0>)=> {
            state.status = action.payload
        },
        addFavorites: (state, action:PayloadAction<Root2>)=>{
          state.favorites[0].push(action.payload)
        }
    }
})

export const {swap, addFavorites} =  filterSlice.actions;
export const selectFavorites = (state:RootState)=>state.filter.favorites
export const selectStatus = (state:RootState)=>state.filter.status

export default filterSlice.reducer