import React, { Component } from 'react';
import BookList from '../containers/BookList';
import GoogleAPISearch from '../containers/GoogleAPISearch';
import Header from './Header';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <Header />
        </div>
        <div style={{padding: 10}}
             className="row">
            <GoogleAPISearch />
        </div>
        <div className="row">
          <div className="col-md-12">
            <BookList />
          </div>
        </div>
      </div>

    );
  }
}
