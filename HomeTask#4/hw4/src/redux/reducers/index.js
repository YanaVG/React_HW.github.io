import { combineReducers } from 'redux';
import itemsReducer from './movies-list';
import filterReducer from './filter';

const rootReduser = combineReducers({
  movies: itemsReducer,
  filter: filterReducer,
});

export default rootReduser;
