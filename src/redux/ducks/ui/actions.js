import * as types from './types';

export const favoriteTechsAdd = (tech) => ({
  type: types.FAVORITE_TECHS_ADD,
  tech,
});

export const favoriteTechsDelete = (tech) => ({
  type: types.FAVORITE_TECHS_DELETE,
  tech,
});
