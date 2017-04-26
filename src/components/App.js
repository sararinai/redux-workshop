import React, {Component} from 'react';
import BookList from '../containers/BookList';
import GoogleAPISearch from '../containers/GoogleAPISearch';
import Header from './common/Header';
import {ContainerFluid, Row, Col} from './bootstrap/index';
import FilterResults from './FilterResults';
import ViewSelector from './../containers/ViewSelector';


export default class App extends Component {
  render() {
    return (
      <ContainerFluid>
        <Row className="header">
          <Header />
        </Row>
        <Row>
          <Col md={2}>
            <ViewSelector />
          </Col>
          <Col md={10}>
            <GoogleAPISearch />
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <FilterResults />
          </Col>
          <Col md={10}>
            <BookList />
          </Col>
        </Row>
      </ContainerFluid>
    );
  }
}
