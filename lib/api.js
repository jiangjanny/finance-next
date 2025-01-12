// lib/api.js
import axios from 'axios';

// 從環境變數中讀取 baseURL
const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL, // 使用環境變數
    timeout: 10000, // 設置超時時間
    headers: {
        'Content-Type': 'application/json',
    },
});

// 請求攔截器：添加 token 等
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('auth_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// 響應攔截器：統一處理錯誤
api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('API Error: ', error);
        return Promise.reject(error);
    }
);

export default api;
