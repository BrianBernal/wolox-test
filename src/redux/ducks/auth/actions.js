import * as types from './types';

/**
 * Login
 */

export const authLogin = () => ({
  type: types.AUTH_LOGIN,
});

/**
 * signup
 */

export const authSignupRequest = (payload, errorCallback) => ({
  type: types.AUTH_SIGNUP_REQUEST,
  payload,
  errorCallback,
});

export const authSignupSuccess = (response) => ({
  type: types.AUTH_SIGNUP_SUCCESS,
  response,
});

export const authSignupFail = (response) => ({
  type: types.AUTH_SIGNUP_FAIL,
  response,
});

/**
 * signout
 */

export const authSignout = () => ({
  type: types.AUTH_SIGNOUT,
});
