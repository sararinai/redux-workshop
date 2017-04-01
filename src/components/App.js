import React, {Component} from 'react';
import BookList from '../containers/BookList';
import GoogleAPISearch from '../containers/GoogleAPISearch';
import Header from './Header';
import BreadCrums from './BreadCrums';
import ViewSelector from './ViewSelector';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {/*<BreadCrums items={['Home', 'Search']} active={'Search'}/>*/}
        <div className="row">
          <div className="col-md-2 col-sm-2">
            <ViewSelector />
          </div>
          <div className="col-md-10 col-sm-10">
            <GoogleAPISearch />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <BookList />
          </div>
        </div>
      </div>
    );
  }
}
