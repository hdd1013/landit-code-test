// Proxy server for API key security
// APIキーのセキュリティのためのProxyサーバー。
// フロントエンドテストであるため、テストと詳細な大切は省略します。

import dotEnv from 'dotenv';
import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

dotEnv.config();
const app = express();

app.use('/api', createProxyMiddleware({
  target: 'https://opendata.resas-portal.go.jp',
  changeOrigin: true,

  pathRewrite: (path) => {
    return path.replace('/', '/api/v1/'); // rewrite path
  },
  on: {
    proxyReq: (proxyReq)=>{
      proxyReq.setHeader('X-API-KEY', process.env.RESAS_API_KEY as string);
      return proxyReq;
    },
    proxyRes: ((proxyRes, req, res)=>{
      if (process.env.NODE_ENV === 'development') {
        res.setHeader('Access-Control-Allow-Origin', '*');
      }
    }),
  },
}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
