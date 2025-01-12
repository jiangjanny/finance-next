// lib/apiService.js
import api from './api';

// 定義通用的 GET 和 POST 方法
export const getData = async (url, params = {}) => {
    try {
        const response = await api.get(url, { params });
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const postData = async (url, data) => {
    try {
        const response = await api.post(url, data);
        return response.data;
    } catch (error) {
        console.error('Error posting data:', error);
        throw error;
    }
};
