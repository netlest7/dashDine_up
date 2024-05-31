import axios from "axios";
import { storeAccessSuccess } from "../reducers/storeSlice";


const url = "http://localhost:4000/api/v1"

export const storeTurnOFFON = (storeId) => async(dispatch) => {
    try {
        const {data} = await axios.put(`${url}/storeOff/${storeId}`)
        console.log(data);
        dispatch(
            storeAccessSuccess({
                message: data.message
            })
        )
    } catch (error) {
            console.log(error);
    }
}