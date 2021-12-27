import * as api from '../../http';
import {FETCH_POSTOFFICES} from "./actionTypes";

export const allPostOffices = () => async(dispatch) => {
    try {
        const {data} = await api.fetchPostOffices();
        dispatch({type: FETCH_POSTOFFICES, payload: data})
    } catch (e) {
        console.log(e.message);
    }
}