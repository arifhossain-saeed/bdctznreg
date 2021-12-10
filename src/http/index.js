import axios from 'axios';

const url = 'http://localhost:5000/bdctznreg/api/v1/';

export const fetchDistricts = () => axios.get(url + '/districts');
export const fetchSubDistricts = () => axios.get(url + '/sub_districts');