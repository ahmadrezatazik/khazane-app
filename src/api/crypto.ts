import axios from 'axios';
import { API_BASE_URL } from '@env';

export const getUSDTPrice = async () => {
  const res = await axios.get(`${API_BASE_URL}/crypto/usdt-irt`);
  return res.data;
};
