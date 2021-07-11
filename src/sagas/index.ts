import { takeLatest, all } from 'redux-saga/effects';
import API from '../api/zhyx/user/userApi';

/* ------------- Types ------------- */
import { UserTypes } from '../store/UserRedux';

/* ------------- Sagas ------------- */
import { login } from './UserSagas';

export default function* root() {
  yield all([takeLatest(UserTypes.LOGIN_REQUEST, login, API)]);
}
