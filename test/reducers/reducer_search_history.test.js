import reducer from '../../src/reducers/reducer_search_history';
import {SEARCH_REQUEST}  from '../../src/actions/index';

describe('search history reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {}))
      .toEqual([]);
  });

  it('should add new search to history', () => {

    let action = {
      type: SEARCH_REQUEST,
      payload: {
        searchTerm: 'kubernetes',
        searchType: 'title',
        resultsByPage: 10,
        startIndex: 0
      }
    };

    expect(reducer([], action))
      .toEqual([action.payload]);
  })
});