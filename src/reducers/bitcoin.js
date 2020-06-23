import { FETCH_BITCOIN } from '../actions/types';

export default (state = {}, action) => {
  if (FETCH_BITCOIN === action.type) {
    return action.payload.data;
  }

  return state;
};
