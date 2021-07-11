import { UserInfo } from './userApi.type';

export const UserInfoMappper = (data: any): UserInfo => {
  // 参数校验
  // 返回业务相关数据
  const { loginUserName: name = '', mobile = '' } = data || {};
  return { name, mobile };
};
