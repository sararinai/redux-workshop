import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchBooks} from '../actions/index';
import Book from '../components/book/Book';
import BookContainer from '../components/book/BookContainer';
import Pagination from '../components/Pagination';
import TotalResults from '../components/TotalResults';

class BookList extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //this.props.fetchBooks();
  }

  render() {
    let activeClass = this.props.activeView == '3books-view'
      ? 'col-md-4 col-sm-6' : 'col-md-12 col-sm-12';

    let books = this.props.books.map((book, index) => {
      return (
        <BookContainer key={book.id}
                       activeClass={activeClass}>
          <Book book={book}/>
        </BookContainer>
      );
    });

    let pagination = this.props.totalItems > 0 &&
      (<div className="col-md-12 text-center">
        <Pagination />
      </div>);

    return (
      <div className="row">
        <div className="col-md-2">
          <TotalResults totalItems={this.props.totalItems}/>
        </div>
        <div className="col-md-12">
          {books}
        </div>
        {pagination}
      </div>

    )
  }
}

function mapStateToProps(state) {
  return {
    books: state.books.items,
    totalItems: state.books.totalItems,
    activeView: state.activeView
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchBooks}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
