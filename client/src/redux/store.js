import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import productsReducer from "./productsSlice"
import searchReducer from "./searchSlice"


export const store = configureStore({
    reducer:{
        user: userReducer,
        products: productsReducer,
        search: searchReducer,
    }
})