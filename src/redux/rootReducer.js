//  redux
import { combineReducers } from 'redux';

//  reducers
import session from 'redux/ducks/auth/reducers';

export default combineReducers({
  session,
  // ui: combineReducers({}),
});
