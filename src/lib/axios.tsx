import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';
import { GetServerSidePropsContext, NextPageContext } from 'next';

interface ServerRequestConfig extends AxiosRequestConfig {
  ctx?: NextPageContext | GetServerSidePropsContext;
}

const instance = axios.create({
  baseURL: '/api',
  withCredentials: true,
  validateStatus(status) {
    return status < 400;
  },
});

const wrapper = <P extends any>(config: ServerRequestConfig): AxiosPromise<P> => instance(config);

export * from 'axios';
export default wrapper;
