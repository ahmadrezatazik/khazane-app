import axios from 'axios';

const API_BASE_URL = 'https://khazane-backend.onrender.com'; // آدرس سرور خودت رو بذار

export const getAllAssets = async () => {
  const response = await axios.get(`${API_BASE_URL}/portfolio`);
  return response.data;
};

export const addAsset = async (assetData: any) => {
  const response = await axios.post(`${API_BASE_URL}/portfolio`, assetData);
  return response.data;
};
