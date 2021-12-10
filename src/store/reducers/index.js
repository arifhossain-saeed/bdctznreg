import {combineReducers} from "redux";
import { districts, subDistricts } from "./borderReducer";

export default combineReducers({
    districts,
    subDistricts
});