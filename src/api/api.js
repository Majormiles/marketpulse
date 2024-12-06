import axios from 'axios'
// const local = 'https://marketpulse-api.onrender.com'
const production = 'https://marketpulse-api.onrender.com'
const api = axios.create({
    baseURL: `${production}/api`,
    withCredentials : true
})
export default api