//  libraries
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';

//  redux
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = process.env.NODE_ENV === 'development'
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  : compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
const persist = persistStore(store);
sagaMiddleware.run(rootSaga);

export { store, persist };
