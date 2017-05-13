import React, {Component} from 'react';
import {connect} from 'react-redux';
import Book from '../components/book/Book';
import BookContainer from '../components/book/BookContainer';
import Pagination from './Pagination';
import {Row, Col} from 'react-bootstrap';

export class BookList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let activeClass = this.props.activeView === '3books-view'
      ? 'col-md-4 col-sm-6' : 'col-md-12 col-sm-12';

    let books = this.props.books.map((book) => {
      return (
        <BookContainer key={book.id}
                       activeClass={activeClass}>
          <Book book={book}/>
        </BookContainer>
      );
    });

    let pagination = this.props.totalItems > 0 &&
      (<Col md={12} className="text-center">
        <Pagination />
      </Col>);

    return (
      <Row>
        <Col md={12}>
          {books}
        </Col>
        {pagination}
      </Row>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books,
    totalItems: state.search.totalItems,
    activeView: state.activeView
  };
}

export default connect(mapStateToProps)(BookList);
