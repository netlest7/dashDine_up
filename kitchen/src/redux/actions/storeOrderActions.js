import { storeOrderRequest, storeOrderSuccess } from "../reducers/storeOrdersSlice";
import axios from "axios"

const url = "http://localhost:4000/api/v1"


export const getAllStoreOrders = (storeId) => async(dispatch)=> {
        try {
                dispatch(storeOrderRequest());

                const {data} = await axios.get(`${url}/getAllOrders/${storeId}`)
                 console.log(data);
                dispatch(
                    storeOrderSuccess({
                        orders: data.orders
                    })
                )
        } catch (error) {
            console.log(error);
        }
}

export const orderFullfilled = (storeId,orderId) => async(dispatch) => {
    try {
        dispatch(storeOrderRequest())
        await axios.post(`${url}/orderStatus`,{order_id:orderId})
        const {data} = await axios.get(`${url}/getAllOrders/${storeId}`)
                 console.log(data);
                dispatch(
                    storeOrderSuccess({
                        orders: data.orders
                    })
                )

    } catch (error) {
        console.log(error);
    }
}