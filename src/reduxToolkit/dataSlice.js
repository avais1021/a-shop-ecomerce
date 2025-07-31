import {createSlice} from "@reduxjs/toolkit";

const dataSlice = createSlice ({
    name : "dataSlice",
    initialState : {
        serachVal : "",
    },
    reducers : {
        getSerachVal : (state,action) => {
            state.serachVal = action.payload
        } ,
    }
})

export const {getSerachVal} = dataSlice.actions;

export default dataSlice.reducer;