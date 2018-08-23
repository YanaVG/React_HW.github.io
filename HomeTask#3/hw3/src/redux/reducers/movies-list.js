import { combineReducers } from 'redux';
import {
  ADD_TO_WATCHLIST,
  REMOVE_FROM_WATCHLIST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MORE_MOVIES,
  SET_TO_LOCALSTORAGE,
} from '../types';

const items = (state = [], { type, payload }) => {
  switch (type) {
    case FETCH_MOVIES_SUCCESS:
      return payload;
    case FETCH_MORE_MOVIES:
      return state.concat(payload);
    default:
      return state;
  }
};

const watchList = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_TO_WATCHLIST:
      return [payload, ...state];
    case REMOVE_FROM_WATCHLIST:
      return state.filter(item => item.id !== payload);
    case SET_TO_LOCALSTORAGE:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  items,
  watchList,
});
