import { all } from 'redux-saga/effects';
//  sagas
import rootUser from './ducks/auth/saga';

export default function* rootSaga() {
  yield all([rootUser()]);
}
