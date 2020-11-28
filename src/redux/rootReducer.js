//  redux
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//  reducers
import session from 'redux/ducks/auth/reducers';
import techlist from 'redux/ducks/techList/reducers';
import ui from 'redux/ducks/ui/reducers';

const persist = {
  key: 'app-root',
  storage,
  whitelist: ['ui'],
};

const rootReducer = combineReducers({
  session,
  techlist,
  ui,
});

export default persistReducer(persist, rootReducer);
