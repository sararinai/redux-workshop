import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveViewReducer from './reducer_activeView';
import SearchReducer from './reducer_search';
import ListSearchesReducer from './reducer_listSearches';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeView: ActiveViewReducer,
  search: SearchReducer,
  listSearch: ListSearchesReducer
});

export default rootReducer;
