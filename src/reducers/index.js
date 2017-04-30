import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveViewReducer from './reducer_activeView';
import SearchReducer from './reducer_search';
import SearchHistoryReducer from './reducer_search_history';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeView: ActiveViewReducer,
  search: SearchReducer,
  searchHistory: SearchHistoryReducer
});

export default rootReducer;