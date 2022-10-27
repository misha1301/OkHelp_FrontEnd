import axios from "axios";

const BASE_URL = 'http://localhost:5165';

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'ContentType' : 'application/json' },
    withCredentials: true
});

