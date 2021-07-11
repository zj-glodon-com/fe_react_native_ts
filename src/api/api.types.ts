import { ApiResponse } from 'apisauce';

export type ApiResult<T> = { success: boolean; data: T };

export type ApiParams = (string | number | boolean | object | undefined)[];

export interface AxiosApiFn<P extends ApiParams = ApiParams, T = any> {
  (...args: P): Promise<ApiResponse<T>>;
}
export interface ApiFn<P extends ApiParams = ApiParams, T = any> {
  (...args: P): Promise<ApiResult<T>>;
}
export interface RespDataMapper<T> {
  (data: object | undefined): T;
}
