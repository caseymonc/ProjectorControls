import legacyProxy, { config as proxyConfig } from 'src/lib/legacyProxy';

export const config = proxyConfig;

export default async function handler(req, res) {
  legacyProxy(req, res);
}