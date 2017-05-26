import uniqWith from 'lodash/uniqWith';
import isEqual from 'lodash/isEqual';
import { SEARCH_REQUEST } from '../../src/actions/index';

export default function (state = [], action) {
  switch (action.type) {
    case SEARCH_REQUEST: {
      const { searchTerm, searchType } = action.payload;
      return uniqWith([...state, { searchTerm, searchType }], isEqual).splice(-5);
    }
    default:
      return state;
  }
}
