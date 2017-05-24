import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col } from 'react-bootstrap';
import { newSearch } from '../actions/index';

class GoogleAPISearch extends Component {

  constructor(props) {
    super(props);

    this.state = {
      query: '',
      type: 'title',
      maxResults: 20,
      placeHolder: 'Clean Code',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleTypeSelectorChange = this.handleTypeSelectorChange.bind(this);
    this.handleMaxResultsChange = this.handleMaxResultsChange.bind(this);
    this.doSearch = this.doSearch.bind(this);
  }

  componentDidMount() {
    this.props.newSearch(
      'docker',
      'byQuery',
      20,
    );
  }

  handleInputChange(event) {
    this.setState({
      query: event.target.value,
    });
  }

  handleTypeSelectorChange(event) {
    let placeHolder = '';
    const value = event.target.value;

    switch (value) {
      case 'title' :
        placeHolder = 'Clean Code';
        break;
      case 'author':
        placeHolder = 'Robert C. Martin';
        break;
      case 'publisher' :
        placeHolder = 'O\'Reilly Media, Inc';
        break;
      case 'isbn':
        placeHolder = '9781785288319';
        break;
      default:
        placeHolder = '';
    }

    this.setState({
      type: value,
      placeHolder,
    });
  }

  handleMaxResultsChange(event) {
    this.setState({
      maxResults: event.target.value,
    });
  }

  doSearch(event) {
    event.preventDefault();
    this.props.newSearch(
      this.state.query,
      this.state.type,
      this.state.maxResults,
    );
  }

  render() {
    return (
      <form onSubmit={this.doSearch} className="row search-form">
        <Col md={2} sm={2} xs={8}>
          <select
            className="form-control"
            aria-label="query type selector"
            onChange={this.handleTypeSelectorChange}
          >
            <option value={'title'}>Title</option>
            <option value={'author'}>Author</option>
            <option value={'publisher'}>Publisher</option>
            <option value={'byquery'}>ByQuery</option>
            <option value={'isbn'}>ISBN</option>
          </select>
        </Col>
        <Col md={1} sm={1} xs={4}>
          <select
            className="form-control"
            aria-label="max results number"
            onChange={this.handleMaxResultsChange}
          >
            <option value={20}>20</option>
            <option value={40}>40</option>
          </select>
        </Col>
        <Col md={7} sm={7} xs={12}>
          <input
            type="text"
            className="form-control"
            value={this.state.query}
            onChange={this.handleInputChange}
            aria-label="search term"
            placeholder={this.state.placeHolder}
          />
        </Col>
        <Col md={2} sm={2} xs={12}>
          <button
            className="btn form-control"
            type="submit"
          >
            {this.props.searchStatus !== 'SEARCHING' ? 'Search' :
              (<i className="fa fa-spinner fa-spin" />)}
          </button>
        </Col>
      </form>
    );
  }
}

function mapStatusToProps(state) {
  return {
    searchStatus: state.search.status,
  };
}

export default connect(mapStatusToProps, { newSearch })(GoogleAPISearch);
