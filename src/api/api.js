import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL || 'https://marketpulse-api.onrender.com';

const api = axios.create({
    baseURL: `${baseURL}/api`,
    withCredentials: true
});

export default api;
