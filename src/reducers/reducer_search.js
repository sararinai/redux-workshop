import {SEARCH_REQUEST, SEARCH_RESPONSE} from '../actions/index';

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
    case SEARCH_REQUEST:
      return {...state, status: status.SEARCHING, query: action.payload};
    case SEARCH_RESPONSE:
      //TODO avoid two actions...
      //Only change status.
      return {...state, status: status.DONE};
    default:
      return state;
  }
}