import React, {Component} from 'react';
import BookList from '../containers/BookList';
import GoogleAPISearch from '../containers/GoogleAPISearch';
import Header from './common/Header';
import ViewSelector from '../containers/ViewSelector';
import Row from './common/Row';
import ContainerFluid from './common/ContainerFluid';
import Column from './common/Column';
import FilterResults from './FilterResults';

export default class App extends Component {
  render() {
    return (
      <ContainerFluid>
        <Header />
        <Row>
          <Column md="10" mdOffset="2">
            <GoogleAPISearch />
          </Column>
        </Row>
        <Row>
          <Column md="2">
            <FilterResults />
          </Column>
          <Column md="10">
            <BookList />
          </Column>
        </Row>
      </ContainerFluid>
    );
  }
}
