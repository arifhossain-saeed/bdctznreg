import axios from 'axios';

const url = 'http://localhost:5000/api/v1/';
// const url = 'https://bdctznregapi.herokuapp.com/api/v1/';

export const fetchDistricts = () => axios.get(url + 'districts');
export const fetchSubDistricts = () => axios.get(url + 'sub_districts');

export const fetchPoliceStations = () => axios.get(url + 'police_stations');
export const fetchPostOffices = () => axios.get(url + 'post_offices');

export const getCitizen = (citizenInfo) => axios.post(url + 'get_citizen', citizenInfo);
export const createCitizen = (citizenInfo) => axios.post(url + 'create_citizen', citizenInfo);