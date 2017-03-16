import React, { Component } from 'react';
import BookList from './BookList';

export default class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-3">
          <BookList />
        </div>
      </div>
    );
  }
}
