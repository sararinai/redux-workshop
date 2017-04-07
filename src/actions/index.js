import {googleAPISearchRequestGenerator} from './googleApiSearch';
const API_URI = 'http://127.0.0.1:3000/api/0.1/';

export const FETCH_BOOKS = 'FETCH_BOOKS';
export const CHANGE_VIEW = 'CHANGE_VIEW';
export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const SEARCH_RESPONSE = 'SEARCH_RESPONSE';

export function fetchBooks() {
  let books = axios.get(`${API_URI}books`);
  return {
    type: FETCH_BOOKS,
    payload: books
  }
}

export function changeView(activeView) {
  return {
    type: CHANGE_VIEW,
    payload: activeView
  }
}

export function newSearch(query, type, maxResults, startIndex = 0) {

  return (dispatch) => {

      dispatch({
          type: SEARCH_REQUEST,
          payload: {
              query,
              type,
              maxResults,
              startIndex
          }
      });

      googleAPISearchRequestGenerator(query, type, maxResults, startIndex)
      .then((response) => {
          dispatch({
              type: SEARCH_RESPONSE,
              payload: response
          })
      });
  };
}