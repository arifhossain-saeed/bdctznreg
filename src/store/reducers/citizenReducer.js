import {CREATE_CITIZEN, GET_CITIZEN, CLEAR_CITIZEN} from "../actions/actionTypes";


export const citizen = (citizen={}, action) => {
    switch (action.type) {
        case GET_CITIZEN:
            return action.payload;
        case CREATE_CITIZEN:
            return action.payload;
        case CLEAR_CITIZEN:
            return action.payload;
        default:
            return citizen;
    }
}