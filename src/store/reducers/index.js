import {combineReducers} from "redux";
import { districts, subDistricts } from "./borderReducer";
import {citizen} from "./citizenReducer";
import { loginState } from "./loginReducer"

export default combineReducers({
    districts,
    subDistricts,
    citizen,
    loginState
});