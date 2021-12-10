import * as api from '../../http';
import {FETCH_SUBDISTRICT, FETCH_SUBDISTRICTS} from "./actionTypes";

export const allSubDistricts = () => async(dispatch) => {
    try {
        const {data} = await api.fetchSubDistricts();
        dispatch({type: FETCH_SUBDISTRICTS, payload: data})
    } catch (e) {
        console.log(e.message);
    }
}