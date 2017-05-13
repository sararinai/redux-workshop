import { SEARCH_RESPONSE } from '../actions/index';

export default function (state = [], action) {
  switch (action.type) {
    case SEARCH_RESPONSE:
      if (!action.payload.books) {
        return [];
      }
      return action.payload.books;
    default:
      return state;
  }
}
