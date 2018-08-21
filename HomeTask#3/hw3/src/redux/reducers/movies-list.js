import {
  ADD_TO_WATCHLIST,
  REMOVE_FROM_WATCHLIST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MORE_MOVIES,
  SET_TO_LOCALSTORAGE,
} from '../types';

const initialState = {
  items: [],
  watchList: [],
};

const itemsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_WATCHLIST:
      return {
        ...state,
        watchList: [payload, ...state.watchList],
      };
    case REMOVE_FROM_WATCHLIST:
      return {
        ...state,
        watchList: state.watchList.filter(item => item.id !== payload),
      };
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        items: payload,
      };
    case FETCH_MORE_MOVIES:
      return {
        ...state,
        items: state.items.concat(payload),
      };
    case SET_TO_LOCALSTORAGE:
      return {
        ...state,
        items: payload,
      };
    default:
      return state;
  }
};

export default itemsReducer;

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case FETCH_MOVIES_SUCCESS:
//       return payload;
//     default:
//       return state;
//   }
// };

// const loading = (state = false, { type }) => {
//   switch (type) {
//     case FETCH_MOVIES_REQUEST:
//       return true;

//     case FETCH_MOVIES_SUCCESS:
//     case FETCH_MOVIES_FAILURE:
//       return false;

//     default:
//       return state;
//   }
// };

// const error = (state = null, { type, payload }) => {
//   switch (type) {
//     case FETCH_MOVIES_REQUEST:
//       return null;

//     case FETCH_MOVIES_FAILURE:
//       return payload;

//     default:
//       return state;
//   }
// };

// export default combineReducers({
//   items,
//   loading,
//   error,
// });
