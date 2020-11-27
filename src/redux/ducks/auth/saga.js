import { call, put, takeEvery } from 'redux-saga/effects';
import API from 'API';
import * as TYPES from './types';
import { authSignupSuccess, authSignupFail } from './actions';

function* fetchSignup(action) {
  try {
    const { data } = yield call(API.authService.signup, action.payload);
    yield put(authSignupSuccess(data));
  } catch (error) {
    const newError = error.response?.data || { error: error.message };
    yield put(authSignupFail(newError));
    action.errorCallback();
  }
}

export default function* rootUser() {
  yield takeEvery(TYPES.AUTH_SIGNUP_REQUEST, fetchSignup);
}
