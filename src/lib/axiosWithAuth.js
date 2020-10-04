import axios from 'axios';
import { tokenHandler } from './';

const axiosWithAuth = axios.create({
  baseURL: process.env.API_URL || 'http://localhost:8000',
  headers: {
    Authorization: tokenHandler.read(),
  },
});

export default axiosWithAuth;
