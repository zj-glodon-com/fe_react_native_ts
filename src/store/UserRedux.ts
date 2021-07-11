import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  loginRequest: ['data'],
  loginSuccess: ['payload'],
  loginFailure: ['payload'],
});

export const UserTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  userInfo: undefined,
});

/* ------------- Selectors ------------- */

export const AppSelectors = {
  getUserInfo: (state: any) => state.userInfo,
};

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state: any) => state;

// successful api lookup
export const success = (state: any, action: any) => {
  const { payload } = action;
  return state.merge({ ...payload });
};

// Something went wrong somewhere.
export const failure = (state: any, action: any) => {
  const { payload } = action;
  return state.merge({ ...payload });
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: request,
  [Types.LOGIN_SUCCESS]: success,
  [Types.LOGIN_FAILURE]: failure,
});
