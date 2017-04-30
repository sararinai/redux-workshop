import {SEARCH_REQUEST}  from '../../src/actions/index';

export default function (state = [], action) {
  switch (action.type) {
    case SEARCH_REQUEST:
      return [...state, action.payload];
    default:
      return state;
  }
}