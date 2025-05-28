import axios from 'axios';

const api = axios.create({
  baseURL: 'https://test-fe.mysellerpintar.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;