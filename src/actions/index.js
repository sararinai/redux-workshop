import {googleAPISearchRequestGenerator} from './googleApiSearch';
import _ from 'lodash';

export const CHANGE_VIEW = 'CHANGE_VIEW';
export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const SEARCH_RESPONSE = 'SEARCH_RESPONSE';

export function changeView(activeView) {
  return {
    type: CHANGE_VIEW,
    payload: activeView
  }
}

export function changePage(newPage) {
  return (dispatch, getState) => {
    let {searchTerm, searchType, resultsByPage} = getState().search.query;
    let startIndex = (newPage - 1) * resultsByPage;
    newSearch(searchTerm, searchType, resultsByPage, startIndex)(dispatch, getState);
  }
}

export function newSearch(searchTerm,
                          searchType,
                          resultsByPage,
                          startIndex = 0) {

  return (dispatch, getState) => {
    const {search} = getState();

    let query = {
      searchTerm,
      searchType,
      resultsByPage,
      startIndex
    };

    if (searchTerm === '') {
      return;
    }

    if (_.isEqual(query, search.query)) {
      return;
    }

    dispatch({
      type: SEARCH_REQUEST,
      payload: query
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