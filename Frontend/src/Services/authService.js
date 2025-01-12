import axios from 'axios';

const API = axios.create({ baseURL: process.env.REACT_APP_BACKEND_URL });

export const login = (data) => API.post('/auth/login', data);
export const register = (data) => API.post('/auth/register', data);
