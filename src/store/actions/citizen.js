import * as api from '../../http';
import {CLEAR_CITIZEN, CREATE_CITIZEN, UPDATE_CITIZEN, GET_CITIZEN} from "./actionTypes";

export const getCitizen = (citizenInfo) => async (dispatch) => {
    try{
        const {data} = await api.getCitizen(citizenInfo);
        dispatch({type: GET_CITIZEN, payload: data})
    }catch (err) {
        console.log(err.message);
    }
}

export const createCitizen = (citizenInfo) => async(dispatch) =>{
    try {
        const {data} = await api.createCitizen(citizenInfo);
        dispatch({type: CREATE_CITIZEN, payload: data});
    }catch (err) {
        console.log(err.message);
    }
}

export const updateCitizen = (citizenInfo) => async(dispatch) =>{
    try {
        const {data} = await api.updateCitizen(citizenInfo);
        dispatch({type: UPDATE_CITIZEN, payload: data});
    }catch (err) {
        console.log(err.message);
    }
}

export const clearCitizen = () => (dispatch) => {
    try {
        dispatch({type: CLEAR_CITIZEN, payload: {}})
    }catch (err) {
        console.log(err.message);
    }
}