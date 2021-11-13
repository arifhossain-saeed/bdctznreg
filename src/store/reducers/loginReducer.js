// Custom Imports
import { LOGIN_SUCCESS } from "../actions/actionTypes";


// Default State
const defaultState = {
    recordFound: false
}

export default function reducer(state = defaultState, action) {
    console.log({state, action});

    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, recordFound: true};
        default:
            return state;
    }
}