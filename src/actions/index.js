import {googleAPISearchGenerator} from './googleApiSearch';
const API_URI = 'http://127.0.0.1:3000/api/0.1/';

export const FETCH_BOOKS = 'FETCH_BOOKS';
export const GOOGLE_API_SEARCH = 'GOOGLE_API_SEARCH';
export const CHANGE_VIEW = 'CHANGE_VIEW';
export const NEW_SEARCH = 'NEW_SEARCH';
export const DELETE_REGISTER = 'DELETE_REGISTER';

export function fetchBooks() {
  let books = axios.get(`${API_URI}books`);
  return {
    type: FETCH_BOOKS,
    payload: books
  }
}

export function googleAPISearch(query, type, maxResults = 20, startIndex = 0) {
  let promiseRequest = googleAPISearchGenerator(query, type, maxResults, startIndex);

  return {
    type: GOOGLE_API_SEARCH,
    payload: promiseRequest
  }
}

export function changeView(activeView) {
  return {
    type: CHANGE_VIEW,
    payload: activeView
  }
}

export function newSearch(query, type, maxResults, startIndex = 0) {
  return {
    type: NEW_SEARCH,
    payload: {
      query,
      type,
      maxResults,
      startIndex
    }
  }
}

export function deleteSearch(searchId) {
    return {
        type: DELETE_REGISTER,
        payload: searchId
    }
}
