import {GOOGLE_API_SEARCH, FETCH_BOOKS, CHANGE_PAGE} from '../actions/index';

let initialState = {
  "kind": "books#volumes",
  "totalItems": 0,
  "items": []
};

initialState = {...initialState, actualPage:1};

export default function (state = initialState, action) {
  switch (action.type) {
    // case FETCH_BOOKS:
    //   return action.payload.data;
    case GOOGLE_API_SEARCH:
      return action.payload.data;
    case CHANGE_PAGE:
      //TODO think select page strategy
      return {...state, actualPage:action.payload};
    default:
      return state;
  }
}

/*

 Pagination
 You can paginate the volumes list by specifying two values in the parameters for the request:
 startIndex - The position in the collection at which to start. The index of the first item is 0.
 maxResults - The maximum number of results to return. The default is 10, and the maximum allowable value is 40.

 */