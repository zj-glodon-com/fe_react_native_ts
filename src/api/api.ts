import { ApisauceConfig, ApisauceInstance, create } from 'apisauce';
import { AxiosRequestConfig } from 'axios';
import { ApiFn, ApiParams, AxiosApiFn, RespDataMapper } from './Api.types';
import Toast from 'react-native-root-toast';
import { isNil } from 'lodash';
import qs from 'qs';

export class Api {
  public config: ApisauceConfig;
  public apisauce: ApisauceInstance;

  constructor(config?: AxiosRequestConfig) {
    this.config = {
      ...config,
      baseURL: 'https://zhyx-api.m2.com.cn/app',
      timeout: 10 * 1000,
    };
    this.apisauce = create(this.config);
    this.apisauce.axiosInstance.interceptors.request.use((axiosConfig: AxiosRequestConfig) => {
      axiosConfig.data = qs.stringify(axiosConfig.data, { allowDots: true });
      return axiosConfig;
    });
    this.addAsyncRequestTransform();
    this.addMonitor();
  }

  public addAsyncRequestTransform() {
    this.apisauce.addAsyncRequestTransform(async request => {
      request.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
      request.headers.token = 'token';
    });
  }

  public addMonitor() {
    this.apisauce.addMonitor(response => {
      if (__DEV__) {
        const config = response.config!;
        console.log(`%c${config.method}: %c${config.url!.replace(/%/g, '%%')}`, 'color:red;', 'color:blue;');
        if (config.params) {
          console.log('%cparams: ', 'color:orange;', config.params);
        }
        if (config.data) {
          console.log('%cdata: ', 'color:orange;', config.data);
        }
        console.log('%cresult: ', 'color:lawngreen;', response.data);
      }
    });
  }

  request<P extends ApiParams, T extends object | undefined>(api: AxiosApiFn<P, T>): ApiFn<P, T>;
  request<P extends ApiParams, T>(api: AxiosApiFn<P>, mapper: RespDataMapper<T>): ApiFn<P, T>;
  request<P extends ApiParams>(api: AxiosApiFn<P, any>, mapper?: any) {
    return async (...args: P) => {
      if (isNil(this.apisauce)) {
        throw 'Api instance is not created!';
      }
      const response = await api(...args);
      const { code, msg = '' } = response.data;
      if (code !== 1000) {
        Toast.show(msg, {
          duration: Toast.durations.SHORT,
          position: Toast.positions.CENTER,
        });
        return { success: false, data: undefined };
      }
      const { data } = response.data;
      return this.handleResponse(data, mapper);
    };
  }

  handleResponse(data: any, mapper?: any) {
    try {
      if (typeof mapper === 'undefined') {
        return { success: true, data: data };
      }
      return { success: true, data: mapper(data) };
    } catch (error) {
      return { success: false, data: error };
    }
  }
}
