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

    it('should create new search - SEARCH_REQUEST and SEARCH_RESPONSE (async) actions', () => {

        const expectedActions = [{
            type: actions.SEARCH_REQUEST,
            payload: {
                searchTerm: 'docker',
                searchType: 'title',
                resultsByPage: 10,
                startIndex: 0
            }
        }];


        //https://github.com/Ximedes/code-examples-ximedes/blob/master/testing-redux-thunk-jest-async-await/src/test/actions/userActions.test.js

        axios.get = jest.fn((url) => {
            return Promise.resolve();
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

        actions.newSearch('docker', 'title', 10, 0)(dispatch, getState);

        expect(dispatch.mock.calls[0][0])
            .toEqual(expectedActions[0]);
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