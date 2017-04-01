import {GOOGLE_API_SEARCH, FETCH_BOOKS, CHANGE_PAGE} from '../actions/index';

let initialState = {
  "kind": "books#volumes",
  "totalItems": 0,
  "items": []
};

export default function (state = initialState, action) {
  switch (action.type) {
    // case FETCH_BOOKS:
    //   return action.payload.data;
    case GOOGLE_API_SEARCH:
      if (!action.payload.data.items) {
        action.payload.data.items = [];
      }
      return action.payload.data;
    default:
      return state;
  }
}