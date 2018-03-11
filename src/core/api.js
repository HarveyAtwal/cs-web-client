import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_HOST
});

api.defaults.withCredentials = true;

api.interceptors.request.use((config) => {
  const { noAuth } = config;
  if(noAuth) {
    return config;
  }

  return config;
}, (error) => {
  return Promise.reject(error)
});


export default api;
