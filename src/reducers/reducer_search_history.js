import {SEARCH_REQUEST}  from '../../src/actions/index';
import _ from 'lodash';

export default function (state = [], action) {
  switch (action.type) {
    case SEARCH_REQUEST: {
      let {searchTerm, searchType} = action.payload;
      return _.uniqWith([...state, {searchTerm, searchType}], _.isEqual);
    }
    default:
      return state;
  }
}