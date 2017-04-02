import * as actions from '../../src/actions/index';

describe('actions', () => {
  it('should create an action to change view', () => {

    const expectedAction = {
      type: actions.CHANGE_VIEW,
      payload: 'new-view'
    };

    expect(actions.changeView('new-view'))
      .toEqual(expectedAction);
  });

  it('should create an action to create new search', () => {

    const expectedAction = {
      type: actions.NEW_SEARCH,
      payload: {
        query: 'docker',
        type: 'title',
        maxResults: 40,
        startIndex: 1
      }
    };

    expect(actions.newSearch('docker', 'title', 40, 1))
      .toEqual(expectedAction);
  });
});