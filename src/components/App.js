import React, {Component} from 'react';
import BookList from '../containers/BookList';
import GoogleAPISearch from '../containers/GoogleAPISearch';
import Header from './common/Header';
import {Grid, Row, Col} from 'react-bootstrap';
import FilterResults from './FilterResults';
import ViewSelector from './../containers/ViewSelector';


export default class App extends Component {
  render() {
    return (
      <Grid fluid={true}>
        <Row className="header">
          <Header />
        </Row>
        <Row>
          <Col md={2} xsHidden>
            <ViewSelector />
          </Col>
          <Col md={10}>
            <GoogleAPISearch />
          </Col>
        </Row>
        <Row>
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
