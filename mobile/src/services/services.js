import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'http://192.168.1.103:3333',
});

export default httpClient;