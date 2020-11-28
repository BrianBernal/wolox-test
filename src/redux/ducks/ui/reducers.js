import * as types from './types';

const initialState = {
  favoriteTechs: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FAVORITE_TECHS_ADD:
      return {
        ...state,
        favoriteTechs: [...state.favoriteTechs, action.tech],
      };

    case types.FAVORITE_TECHS_DELETE:
      return {
        ...state,
        favoriteTechs: state.favoriteTechs.map((tech) => tech !== action.tech),
      };

    default:
      return state;
  }
};
