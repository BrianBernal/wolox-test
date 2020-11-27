import { loadStorage, removeStorage, saveStorage } from 'tools/storage';
import * as TYPES from './types';

const initialState = {
  loading: false,
  error: null,
  isLogged: !!loadStorage('token'),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.AUTH_LOGIN:
      saveStorage('token', 'fakeToken123');
      return {
        ...state,
        isLogged: true,
      };
    /**
     * signup
     */
    case TYPES.AUTH_SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TYPES.AUTH_SIGNUP_SUCCESS:
      saveStorage('token', action.response.token);
      return {
        ...state,
        loading: false,
        error: null,
        isLogged: true,
      };
    case TYPES.AUTH_SIGNUP_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
        isLogged: false,
      };
    /**
     * signout
     */
    case TYPES.AUTH_SIGNOUT:
      removeStorage('token');
      return {
        ...state,
        isLogged: false,
      };

    default:
      return state;
  }
};
