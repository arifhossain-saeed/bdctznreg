// Custom Imports
import { MODAL_CLOSE } from "../actions/actionTypes";


// Default State
const defaultState = {
    modalOpen: false
}

export default function reducer(state = defaultState, action) {
    console.log({state, action});

    switch (action.type) {
        case MODAL_CLOSE:
            return { ...state, modalOpen: false};
        default:
            return state;
    }
}