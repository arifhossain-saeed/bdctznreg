import {FETCH_DISTRICTS, FETCH_SUBDISTRICTS} from "../actions/actionTypes";

export const districts = (districts = [], action) => {
    switch (action.type) {
        case FETCH_DISTRICTS:
            return action.payload;
        default:
            return districts;
    }
}

export const subDistricts = (subDistricts = [], action) => {
    switch (action.type) {
        case FETCH_SUBDISTRICTS:
            return action.payload;
        default:
            return subDistricts;
    }
}