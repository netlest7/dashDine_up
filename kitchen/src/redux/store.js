import {configureStore} from "@reduxjs/toolkit"
import storeOrderReducer from "./reducers/storeOrdersSlice";
import storeReducer from "./reducers/storeSlice";


const store = configureStore({
    reducer:{
        orders: storeOrderReducer,
        store: storeReducer
    }
})

export default store;