import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        AddItem: (state, action) => {
            const itemExist = state.find((item) => item.id === action.payload.id)
            if(!itemExist){
                state.push(action.payload) 
            }
            // state.map((item) => {
            //     if(item.id !== action.payload.id){
            //         state.push(action.payload) 
            //     }
            //     return item
            // })
            // state.push(action.payload) 
        },
        RemoveItem: (state, action) => {
            // console.log(action.payload,'remove');
            return state.filter((item) => {
               return item.id !== action.payload
            })
        },
    }
})

export const { AddItem, RemoveItem } = cartSlice.actions

export default cartSlice.reducer