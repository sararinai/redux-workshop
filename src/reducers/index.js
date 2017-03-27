import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveViewReducer from './reducer_activeView';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeView: ActiveViewReducer
});

export default rootReducer;