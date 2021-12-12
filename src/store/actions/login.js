// Custom Imports
import * as api from '../../http';
import {CLEAR_CITIZEN, LOGIN} from './actionTypes';

// Action Creators
export const loginAttempt = (citizenInfo) =>async (dispatch) => {
    try {
        const { data } = await api.getCitizen(citizenInfo);
        console.log('Login attempt', data);
        if(data) {
            console.log('If login returns data');
            dispatch({type: LOGIN, payload: true})
        }else {
            console.log('If login returns empty object');
            dispatch({type: LOGIN, payload: false})
        }
    }catch (err) {
        console.log(err.message)
    }
}

export const logoutAttempt = () => (dispatch) => {
    try {
        dispatch({type: LOGIN, payload: false});
    }catch (err) {
        console.log(err.message)
    }
}