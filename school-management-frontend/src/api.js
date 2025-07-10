import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:3000/', // adjust if your backend uses a different port
});


// Always set the latest token before each request
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  } else {
    delete config.headers['Authorization'];
  }
  return config;
});


export default API;
