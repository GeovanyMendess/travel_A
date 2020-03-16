// Axios allow the comunication with api's.
// In this case with mongoose
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333'
});

export default api;