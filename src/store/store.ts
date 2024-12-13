import {configureStore} from '@reduxjs/toolkit';
import potionReducer from "@/store/slices/potionSlice.ts";
import filterReducer from "@/store/slices/filterSlice.ts";
export const store = configureStore({
    reducer:{
        potions: potionReducer,
        filter:filterReducer,
    }
})

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
console.log(typeof store.getState)
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store