import {SEARCH_REQUEST, SEARCH_RESPONSE} from '../actions/index';

export const status = {
  NONE: 'NONE',
  SEARCHING: 'SEARCHING',
  DONE: 'DONE'
};

const initialState = {
  totalItems: 0,
  status: status.NONE,
  totalPages: 0,
  activePage: 0,
  query: {
    searchTerm: '',
    searchType: '',
    resultsByPage: 0,
    startIndex: 0
  }
};

export default (state = initialState, action) => {

  switch (action.type) {
    case SEARCH_REQUEST:
      return {
        ...state,
        status: status.SEARCHING,
        query: action.payload
      };
    case SEARCH_RESPONSE:
      let {totalItems} = action.payload;

      let [totalPages, activePage] = getTotalPagesAndActivePage(totalItems,
        state.query.resultsByPage,
        state.query.startIndex);

      return {
        ...state,
        status: status.DONE,
        totalItems,
        totalPages,
        activePage
      };
    default:
      return state;
  }
}


function getTotalPagesAndActivePage(totalItems, resultsByPage, startIndex) {
  let totalPages = Math.ceil(totalItems / resultsByPage),
    activePage = parseInt(startIndex / resultsByPage + 1);
  return [totalPages, activePage];
}