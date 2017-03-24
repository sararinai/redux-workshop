import {GOOGLE_API_SEARCH, FETCH_BOOKS} from '../actions/index';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_BOOKS:
      return action.payload.data;
    case GOOGLE_API_SEARCH:
      return action.payload.data.items;
    default:
      return state;
  }
}