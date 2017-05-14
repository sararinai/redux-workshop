import React, {Component} from 'react';
import BookList from '../containers/BookList';
import GoogleAPISearch from '../containers/GoogleAPISearch';
import Header from './common/Header';
import {Grid, Row, Col} from 'react-bootstrap';
import FilterResults from '../containers/FilterResults';
import ViewSelector from './../containers/ViewSelector';
import Pagination from './../containers/Pagination';


export default class App extends Component {
  render() {
    return (
      <Grid fluid={true}>
        <Row className="header">
          <Header />
        </Row>
        {/*<Row>*/}
          {/*<Col md={12} xsHidden>*/}
            {/*<Row>*/}
              {/*<Col md={6}>*/}
                {/*<ViewSelector />*/}
              {/*</Col>*/}
              {/*<Col md={6} className="pagination">*/}
                {/*<Pagination />*/}
              {/*</Col>*/}
            {/*</Row>*/}
          {/*</Col>*/}
        {/*</Row>*/}
        <Row className="google-search">
          <Col md={12}>
            <GoogleAPISearch />
          </Col>
        </Row>
        <Row className="book-list">
          <Col md={2} xsHidden>
            <FilterResults />
          </Col>
          <Col md={10}>
            <BookList />
          </Col>
        </Row>
      </Grid>
    );
  }
}
