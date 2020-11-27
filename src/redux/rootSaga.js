import { all } from 'redux-saga/effects';
//  sagas
import rootUser from './ducks/auth/saga';
import rootTechlist from './ducks/techList/saga';

export default function* rootSaga() {
  yield all([
    rootUser(),
    rootTechlist(),
  ]);
}
