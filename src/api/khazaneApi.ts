import axios from 'axios';

const BASE_URL = 'https://khazane-backend.onrender.com'; // اگر دامنه‌ات نهایی نیست، لوکال بذار

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

export const getCryptoData = () => api.get('/crypto');
export const getGoldData = () => api.get('/gold');
export const getForexData = () => api.get('/forex');
export const getStockData = () => api.get('/stock');

export default api;
