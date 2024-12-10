import {configureStore} from '@reduxjs/toolkit';
import jokeSlice from "@/store/slices/jokeSlice.ts";

export const store = configureStore({
    reducer:{
        joke:jokeSlice
    }
})

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
console.log(typeof store.getState)
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store