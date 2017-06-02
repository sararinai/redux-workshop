import {NEW_SEARCH, DELETE_REGISTER} from '../actions/index';
const MAX_LENGTH = 5;

export default (state = [], action) => {
  switch (action.type) {
      case NEW_SEARCH:
          if(!state.includes(action.payload.query)){
              let newState;
              if (state.length === MAX_LENGTH) {
                  newState = [...state.slice(1), action.payload.query];
              } else {
                  newState = [...state, action.payload.query];
              }
              return newState;

          } else {
              return state;
          }

      case DELETE_REGISTER:
          return [
              ...state.slice(0, action.payload),
              ...state.slice(action.payload + 1)
          ];
      default:
      return state;
  }
}
