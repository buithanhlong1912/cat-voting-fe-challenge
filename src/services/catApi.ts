import axios from 'axios';
import { envConfig } from '../configs/env.config';

const API_BASE_URL = envConfig.API_URL || 'https://api.thecatapi.com/v1';
const API_KEY = envConfig.API_KEY;

const catApiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'x-api-key': API_KEY,
    'Content-Type': 'application/json',
  },
});

export const catApi = {
  getImages: async () => {
    const response = await catApiClient.get('/images/search');
    return response.data;
  },
};