import * as TYPES from './types';

const initialState = {
  loading: false,
  error: null,
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    /**
     * signup
     */
    case TYPES.TECHLIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TYPES.TECHLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.response,
      };
    case TYPES.TECHLIST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
        isLogged: false,
      };

    default:
      return state;
  }
};
