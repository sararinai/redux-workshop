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


});