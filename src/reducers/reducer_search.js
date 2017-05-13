import { SEARCH_REQUEST, SEARCH_RESPONSE } from '../actions/index';

export const status = {
  NONE: 'NONE',
  SEARCHING: 'SEARCHING',
  DONE: 'DONE',
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
    startIndex: 0,
  },
};

function getTotalPagesAndActivePage(totalItems, resultsByPage, startIndex) {
  const totalPages = Math.ceil(totalItems / resultsByPage);
  const activePage = parseInt((startIndex / resultsByPage) + 1, 10);
  return [totalPages, activePage];
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return {
        ...state,
        status: status.SEARCHING,
        query: action.payload,
      };
    case SEARCH_RESPONSE: {
      const { totalItems } = action.payload;
      const [totalPages, activePage] = getTotalPagesAndActivePage(totalItems,
        state.query.resultsByPage,
        state.query.startIndex);

      return {
        ...state,
        status: status.DONE,
        totalItems,
        totalPages,
        activePage,
      };
    }
    default:
      return state;
  }
};
