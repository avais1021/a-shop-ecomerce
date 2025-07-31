import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
import dataSlice from "./dataSlice";


export const store = configureStore({
    reducer : {
        cart : cartReducer,
        dataSlice : dataSlice,
    }
})
