import React, { Component } from 'react';
import BookList from './BookList';
import FilterBook from './FilterBook';

export default class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-3">
          <FilterBook />
          <BookList />
        </div>
      </div>
    );
  }
}
