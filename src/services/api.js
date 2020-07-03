import axios from 'axios';

const api = axios.create({
  baseURL: 'http://35.215.197.50:8181/',
});

export default api;
