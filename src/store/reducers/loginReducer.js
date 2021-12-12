// Custom Imports
import { LOGIN, LOGOUT } from "../actions/actionTypes";

export const loginState = (loggedIn=false, action) => {
    switch (action.type) {
        case LOGIN:
            return action.payload;
        case LOGOUT:
            return action.payload;
        default:
            return loggedIn;
    }
}