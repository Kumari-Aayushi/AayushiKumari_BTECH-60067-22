import axios from "axios";

// axios instance is for API calls
//I can move to env later if needed but for now, hardcoding 
const api = axios.create({
  baseURL: "http://localhost:5000/api"
});

//  if it exists then attach token on every request
api.interceptors.request.use(
  (config) => {
   const token = localStorage.getItem("token");

    if (token) {
    // most of the backend expects the Bearer token
    config.headers.Authorization = "Bearer " + token;
    }return config;
  },
  
  (error) => {
    return Promise.reject(error);  }
);

export default api;
