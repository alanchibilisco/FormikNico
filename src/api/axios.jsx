import axios from 'axios';
const url = import.meta.env.VITE_URL_BACKEND
const instance = axios.create({
  baseURL: url ? url : "http://localhost:3000/api",
  timeout: 1000,
  headers: {'Content-Type':'application/json'}
});

export default instance