import axios, { AxiosResponse } from 'axios';
// import { User } from '../types/userTypes';

const BASE_URL = 'http://localhost:3000';

const userAPI = axios.create({
    baseURL: BASE_URL,
});
