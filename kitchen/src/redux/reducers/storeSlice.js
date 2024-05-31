import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    message:"",
    success:false
}

const storeSlice = createSlice({
    name:"storeStatus",
    initialState,
    reducers:{
        storeAccessSuccess: (state,action) => {
            state.success = true;
            state.message = action.payload.message
        }
    }
})

export const {storeAccessSuccess} = storeSlice.actions
export default storeSlice.reducer;


