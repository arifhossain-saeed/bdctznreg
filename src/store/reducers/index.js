import {combineReducers} from "redux";
import { districts, subDistricts, policeStations, postOffices } from "./borderReducer";
import {citizen} from "./citizenReducer";
import { loginState } from "./loginReducer"

export default combineReducers({
    districts,
    subDistricts,
    policeStations,
    postOffices,
    citizen,
    loginState
});