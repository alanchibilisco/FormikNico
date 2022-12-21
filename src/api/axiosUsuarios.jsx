import axios from 'axios'
const url = import.meta.env.VITE_BACKEND;
// console.log(url);

const instance = axios.create({
    baseURL: url ? url : "https://backend-beer.onrender.com/api",
    timeout: 6000,
    headers: {'Content-Type' : 'application/json'}
  });

export default instance  