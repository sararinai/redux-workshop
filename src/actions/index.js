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

export function newSearch(
    searchTerm,
    searchType,
    resultsByPage,
    startIndex = 0
) {

  return (dispatch) => {

      dispatch({
          type: SEARCH_REQUEST,
          payload: {
              searchTerm,
              searchType,
              resultsByPage,
              startIndex
          }
      });

      googleAPISearchRequestGenerator(searchTerm, searchType, resultsByPage, startIndex)
      .then((response) => {
          dispatch({
              type: SEARCH_RESPONSE,
              payload: {
                  totalItems: response.data.totalItems,
                  books: response.data.items
              }
          })
      });
  };
}