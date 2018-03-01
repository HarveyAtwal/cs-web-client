import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_HOST
});

api.interceptors.request.use((config) => {
  const { noAuth } = config;
  if(noAuth) {
    return config;
  }

  // set JWT token
  config.headers.common = {
    Authorization: `JWT ${localStorage.getItem("jwt_token")}`
  };

  return config;
}, (error) => {
  return Promise.reject(error)
});


export default api;
