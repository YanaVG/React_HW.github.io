import { combineReducers } from 'redux';
import itemsReducer from './movies-list';

const rootReduser = combineReducers({
  movies: itemsReducer,
});

export default rootReduser;
