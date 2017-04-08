import {SEARCH_REQUEST, SEARCH_RESPONSE} from '../actions/index';

const status = {
  NONE: 'NONE',
  DONE: 'DONE',
  SEARCHING: 'SEARCHING'
};

const initialState = {
  totalItems: 20,
  status: status.NONE,
  totalPages: 1,
  activePage: 1,
  query :{
    searchTerm: 'docker',
    searchType: 'title',
    resultsByPage: 20,
    startIndex: 0
  }
};

export default (state = initialState, action) => {
  let activePage;

  switch (action.type) {
    case SEARCH_REQUEST:
      return {
        ...state,
        status: status.SEARCHING,
        query: action.payload
      };
    case SEARCH_RESPONSE:
      let {totalItems} = action.payload,
          totalPages = Math.ceil(totalItems / state.query.resultsByPage);
      activePage = parseInt(state.query.startIndex / state.query.resultsByPage + 1);

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