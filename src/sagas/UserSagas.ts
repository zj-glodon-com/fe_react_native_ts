import { call, put } from 'redux-saga/effects';
import UserActions from '../store/UserRedux';

export interface Response {
  success: boolean;
  data: any;
  [propName: string]: any;
}

export function* login(api: any, { data }: any) {
  const response: Response = yield call(api.login, data);
  const { success, data: userInfo } = response;
  // mapper 中已经对参数进行了处理
  if (success) {
    yield put(UserActions.loginSuccess({ userInfo }));
    return;
  }
  yield put(UserActions.loginFailure(null));
}
