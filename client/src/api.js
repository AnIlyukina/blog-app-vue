import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:8800/api",
  timeout: 1000,
  withCredentials: true
});

export default api;