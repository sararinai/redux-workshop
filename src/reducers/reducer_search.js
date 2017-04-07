import {SEARCH_REQUEST, SEARCH_RESPONSE, RESET_BOOKS} from '../actions/index';

const status = {
  NONE: 'NONE',
  DONE: 'DONE',
  SEARCHING: 'SEARCHING'
};

const initialState = {
  totalItems: 20,
  status: status.NONE,
  query :{
    searchTerm: 'docker',
    searchType: 'title',
    resultsByPage: 20,
    startIndex: 0
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return {...state, status: status.SEARCHING, query: action.payload};
    case SEARCH_RESPONSE:
      return {...state, status: status.DONE, totalItems: action.payload.totalItems};
    default:
      return state;
  }
}