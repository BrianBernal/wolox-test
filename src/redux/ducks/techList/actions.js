import * as types from './types';

/**
 * signup
 */

export const techlistRequest = (errorCallback) => ({
  type: types.TECHLIST_REQUEST,
  errorCallback,
});

export const techlistSuccess = (response) => ({
  type: types.TECHLIST_SUCCESS,
  response,
});

export const techlistFail = (response) => ({
  type: types.TECHLIST_FAIL,
  response,
});
