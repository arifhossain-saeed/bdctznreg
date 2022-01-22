import {CREATE_CITIZEN, GET_CITIZEN, CLEAR_CITIZEN, UPDATE_CITIZEN} from "../actions/actionTypes";

export const citizen = (citizen={}, action) => {
    switch (action.type) {
        case GET_CITIZEN:
            citizen = action.payload;
            return citizen;
        case CREATE_CITIZEN:
            citizen = action.payload;
            return citizen;
        case UPDATE_CITIZEN:
            citizen = action.payload;
            return citizen;
        case CLEAR_CITIZEN:
            citizen = action.payload;
            return citizen;
        default:
            return citizen;
    }
}