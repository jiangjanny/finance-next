import path from 'path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true, // 启用 React 严格模式
  images: {
    domains: ['example.com'], // 允许来自指定域名的图片
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL, // 加载环境变量
  },
  webpack(config) {
    // 配置 @ 别名指向项目根目录
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
};

export default nextConfig;
