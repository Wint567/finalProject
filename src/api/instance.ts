import axios, { AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: 'https://65ac0800fcd1c9dcffc779d1.mockapi.io/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
