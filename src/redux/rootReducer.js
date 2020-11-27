//  redux
import { combineReducers } from 'redux';

//  reducers
import session from 'redux/ducks/auth/reducers';
import techlist from 'redux/ducks/techList/reducers';

export default combineReducers({
  session,
  techlist,
  // ui: combineReducers({}),
});
