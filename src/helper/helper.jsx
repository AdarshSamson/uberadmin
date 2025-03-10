import axios from 'axios';

  const baseURL = 'http://192.168.0.155:8188/pmv-uberbackend/api';



const handleUnauthorizedError = () => {
  localStorage.removeItem('token');
  window.location.href = `${process.env.REACT_APP_BASE_URL}/login`;
};


export const get = async (endpoint, ignoreUnauthorized = false ) => {
  try {
    const token = localStorage.getItem('token');
    const headers = token ? { 'Authorization': `Bearer ${token}` } : {};
    const response = await axios.get(`${baseURL}/${endpoint}`, { headers });
    return response.data;
  } catch (error) {
    if (!ignoreUnauthorized && error.response && (error.response.status === 401 )) {
      handleUnauthorizedError();
    } else {
      throw error;
    }
  }
};

export const post = async (endpoint, data ,ignoreUnauthorized = false) => {
  try {
    const token = localStorage.getItem('token');
    const headers = token ? { 'Authorization': `Bearer ${token}` } : {};
    const response = await axios.post(`${baseURL}/${endpoint}`, data, { headers });
    return response.data;
  } catch (error) {
    if (!ignoreUnauthorized && error.response && (error.response.status === 401 )) {
      handleUnauthorizedError();
    } else {
      throw error;
    }
  }
};
