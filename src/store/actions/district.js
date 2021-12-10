import * as api from '../../http';
import {FETCH_DISTRICTS, FETCH_DISTRICT} from "./actionTypes";

export const allDistricts = () => async(dispatch) => {
    try {
        const {data} = await api.fetchDistricts();
        dispatch({type: FETCH_DISTRICTS, payload: data})
    } catch (e) {
        console.log(e.message);
    }
}