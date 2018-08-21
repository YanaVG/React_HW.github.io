import { combineReducers } from 'redux';
import filterReducer from './filter';
import itemsReducer from './movies-list';

const rootReduser = combineReducers({
  filter: filterReducer,
  movies: itemsReducer,
});

export default rootReduser;
