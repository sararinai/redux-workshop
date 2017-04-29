import * as actions from '../../src/actions/index';
import axios from 'axios';
import "regenerator-runtime/runtime";

describe('actions', () => {
  it('should create an action to change view', () => {

    const expectedAction = {
      type: actions.CHANGE_VIEW,
      payload: 'new-view'
    };

    expect(actions.changeView('new-view'))
      .toEqual(expectedAction);
  });

  it('should create new search - SEARCH_REQUEST and SEARCH_RESPONSE (async) actions', async () => {

    //https://github.com/Ximedes/code-examples-ximedes/blob/master/testing-redux-thunk-jest-async-await/src/test/actions/userActions.test.js

    const expectedActions = [
      {
        type: actions.SEARCH_REQUEST,
        payload: {
          searchTerm: 'docker',
          searchType: 'title',
          resultsByPage: 10,
          startIndex: 0
        }
      }, {
        type: actions.SEARCH_RESPONSE,
        payload: {
          totalItems: 0,
          books: []
        }
      }
    ];

    axios.get = jest.fn((url) => {
      return new Promise((resolve) => {
        resolve({
          data: {
            totalItems: 0,
            items: []
          }
        });
      });
    });

    const dispatch = jest.fn(),
      getState = jest.fn(() => {

        return {
          search: {
            query: {
              searchTerm: 'docker',
              searchType: 'title',
              resultsByPage: 20,
              startIndex: 0
            }
          }
        };
      });

    await actions.newSearch('docker', 'title', 10, 0)(dispatch, getState);

    let calls = dispatch.mock.calls;

    expect(calls[0][0])
      .toEqual(expectedActions[0]);

    expect(calls[1][0])
      .toEqual(expectedActions[1]);
  });

  it('should not create new search if is the same request', () => {
    const dispatch = jest.fn(),
      getState = jest.fn(() => {

        return {
          search: {
            query: {
              searchTerm: 'docker',
              searchType: 'title',
              resultsByPage: 10,
              startIndex: 0
            }
          }
        };
      });

    expect(actions.newSearch('docker', 'title', 10, 0)(dispatch, getState))
      .toBeUndefined();
  });
});