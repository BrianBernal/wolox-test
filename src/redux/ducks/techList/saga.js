import { call, put, takeEvery } from 'redux-saga/effects';
import API from 'API';
import * as TYPES from './types';
import { techlistSuccess, techlistFail } from './actions';

function* fetchSTechlist(action) {
  try {
    const { data } = yield call(API.techListService.getTechList);
    yield put(techlistSuccess(data));
  } catch (error) {
    const newError = error.response?.data || { error: error.message };
    yield put(techlistFail(newError));
    action.errorCallback();
  }
}

export default function* rootTechlist() {
  yield takeEvery(TYPES.TECHLIST_REQUEST, fetchSTechlist);
}
