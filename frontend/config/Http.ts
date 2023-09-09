import axios from 'axios';
import config from './config';

const http = axios.create({
  baseURL: config.API_URL,
  timeout: 10000,
});

export default http;