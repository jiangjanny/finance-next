// next.config.ts
import type { NextConfig } from "next";
import path from 'path';
const nextConfig: NextConfig = {
  reactStrictMode: true, // 啟用 React 嚴格模式
  images: {
    domains: ['example.com'], // 允許來自指定域名的圖片
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL, // 加載環境變數
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname),
    },
  }
};

export default nextConfig;
