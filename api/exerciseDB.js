import axios from "axios";
import { RapidAPIKey } from "../constants";

const baseURL = 'https://exercisedb.p.rapidapi.com';

const apiCall = async (url, params) => {
    try {
        const options = {
            method: 'GET',
            url,
            params,
            headers: {
                'x-rapidapi-key': RapidAPIKey,
                'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
            }
        };
        const response = await axios.request(options);
        return response.data; 
    } catch (error) {
        if (error.response) {
            console.error('Error Message:', error.message);
        }
        return null;  
    }
}

export const fetchExerciseBodypart = async (bodypart) => {
    const data = await apiCall(`${baseURL}/exercises/bodyPart/${bodypart}`);
    return data;  
}
