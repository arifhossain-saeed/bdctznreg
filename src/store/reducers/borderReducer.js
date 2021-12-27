import {FETCH_DISTRICTS, FETCH_POLICESTATIONS, FETCH_POSTOFFICES, FETCH_SUBDISTRICTS} from "../actions/actionTypes";

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

export const policeStations = (policeStations = [], action) => {
    switch (action.type) {
        case FETCH_POLICESTATIONS:
            return action.payload;
        default:
            return policeStations;
    }
}

export const postOffices = (postOffices = [], action) => {
    switch (action.type) {
        case FETCH_POSTOFFICES:
            return action.payload;
        default:
            return postOffices;
    }
}