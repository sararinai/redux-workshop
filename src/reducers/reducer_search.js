import {NEW_SEARCH, GOOGLE_API_SEARCH} from '../actions/index';

const status = {
  NONE: 'NONE',
  DONE: 'DONE',
  SEARCHING: 'SEARCHING'
};

const initialState = {
  status: status.NONE,
  query :{
    query: '',
    type: 'title',
    maxResults: 20,
    startIndex: 0
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NEW_SEARCH:
      return {...state, status: status.SEARCHING, query: action.payload};
    case GOOGLE_API_SEARCH:
      return {...state, status: status.DONE};
    default:
      return state;
  }
}