import ZhyxApi from '../zhyxApi';
import { UserInfoMappper } from './userApi.mapper';
import * as UserTypes from './userApi.type';

class UserApi extends ZhyxApi {
  getVerifyCode = this.request(params => this.apisauce.post<any>('/login/verifyMobile', params));

  login = this.request(params => this.apisauce.post<UserTypes.UserInfo>('/login/doLogin', params), UserInfoMappper);
}

const userApi = new UserApi();

userApi.setup();
export default userApi;
