export const DAYS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];

export const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const getYearList = () => {
    const currentYr = new Date().getFullYear();
    let yearList = [];
    for (let i=currentYr; i>currentYr-101; i--){
        yearList.push(i);
    }
    return yearList;
}

export const YEARS = getYearList();

export const DIVISIONS = [
    'Dhaka',
    'Chitagong',
    'Khulna',
    'Barisal',
    'Sylhet',
    'Rangpur',
    'Rajshahi',
    'Mymensingh'
];

export const RELIGIONS = ["Islam", "Hinduism", "Christianity", "Buddhism", "Jewish", "Other"];

export const GENDERS = ["Male", "Female", "Other"];

export const MARITAL_STATUS = ["Never Married", "Married", "Divorced", "Widowed"];

export const RELATIONS = ["Parent", "Sibling", "Spouse", "Child", "Relative", "Friend"];

export const OCCUPATIONS = ["Administrative Official (Private)", "Bank Official", "Business", "Engineering", "Farming", "Govt Official", "Health Care", "IT Work", "Local Govt. Official", "RMG Official", "Other"];

export const EDUCATIONAL_LEVEL = ["Alphabetical", "Primary School", "High School", "Bachelors", "Masters", "Doctorate"];