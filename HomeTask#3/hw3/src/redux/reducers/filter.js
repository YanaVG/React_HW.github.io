import { CHANGE_FILTER } from '../types';

const initialState = 100000;

export default function filterReduser(state = initialState, { type, payload }) {
  switch (type) {
    case CHANGE_FILTER:
      return +payload;
    default:
      return state;
  }
}
