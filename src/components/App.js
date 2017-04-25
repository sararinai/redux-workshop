import React, {Component} from 'react';
import BookList from '../containers/BookList';
import GoogleAPISearch from '../containers/GoogleAPISearch';
import Header from './common/Header';
import ViewSelector from '../containers/ViewSelector';
import Row from './common/Row';
import ContainerFluid from './common/ContainerFluid';
import Col from './common/Column';
import FilterResults from './FilterResults';

export default class App extends Component {
  render() {
    return (
      <ContainerFluid>
        <Header />
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
