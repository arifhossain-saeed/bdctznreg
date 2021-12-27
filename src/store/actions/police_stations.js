import * as api from '../../http';
import {FETCH_POLICESTATIONS} from "./actionTypes";

export const allPoliceStations = () => async(dispatch) => {
    try {
        const {data} = await api.fetchPoliceStations();
        dispatch({type: FETCH_POLICESTATIONS, payload: data})
    } catch (e) {
        console.log(e.message);
    }
}