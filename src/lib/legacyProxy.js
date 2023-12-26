import httpProxyMiddleware from 'next-http-proxy-middleware';

export const config = {
  api: {
    // Enable `externalResolver` option in Next.js
    externalResolver: true,
  },
}

const legacyProxy = (req, res) => {
  httpProxyMiddleware(req, res, {
    target: "http://192.168.1.56:3040",
    pathRewrite: [{
      patternStr: '^/api',
      replaceStr: ''
    }],
  }).catch((e) => {
    console.error('Failed to make request');
  });
};

export default legacyProxy;