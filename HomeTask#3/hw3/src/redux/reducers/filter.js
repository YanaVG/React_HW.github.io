import { CHANGE_FILTER } from '../types';

const initialState = '';

export default function filterReduser(state = initialState, { type, payload }) {
  switch (type) {
    case CHANGE_FILTER:
      return +payload;
    default:
      return state;
  }
}
