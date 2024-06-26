import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    accessToken: "",
    owner: "",
    error:"",
    isAuthenticated: false
}

export const ownerSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        ownerLoginRequest: (state) => {
                state.loading = true
        },
        ownerLoginSuccess: (state,action) => {
            state.accessToken = action.payload.access_token,
            state.owner = action.payload.owner
            state.loading = false
            state.isAuthenticated = true
        },
        ownerLoginFail: (state,action) => {
            state.loading = false
            state.isAuthenticated = false
            state.error = action.payload.error
        },
        ownerLogoutSuccess: (state) => {
                state.loading = false;
                state.owner = "";
                state.accessToken = "";
                state.isAuthenticated = false;
                state.error = "";

        },
        loadUserRequest:(state) =>{
            state.loading= true;
        },
        loadUserSuccess:(state,action) =>{
            state.loading=false;
            state.isAuthenticated=true;
            state.owner = action.payload.owner;
        },
        loadUserFail:(state) =>{
            state.loading=false;
            state.isAuthenticated=false;
            
        },
    }
})

export const {ownerLoginRequest,ownerLoginSuccess,ownerLoginFail
,loadUserRequest,loadUserSuccess,loadUserFail,ownerLogoutSuccess
} = ownerSlice.actions;
export default ownerSlice.reducer;