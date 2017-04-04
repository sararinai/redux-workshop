import React, {Component} from 'react';
import {connect} from 'react-redux';
import {googleAPISearch, newSearch} from '../actions/index';

/**
 * Created by rafael on 27/03/17.
 */
class Pagination extends Component {
  constructor(props) {
    super(props);

    this.changePage = this.changePage.bind(this);
  }

  changePage(newPage){

    let {query} = this.props.search;
    let startItem = (newPage - 1) * query.maxResults;
    this.props.newSearch(query.query, query.type, query.maxResults, startItem);
    this.props.googleAPISearch(query.query, query.type, query.maxResults, startItem);
  }

  render() {

    let {search} = this.props;
    let activePage = search.query.startIndex + 1,
      totalPages = 6;

    let pages = [...Array(totalPages)].map((page, index) => {
      return (
        <li key={index} className={activePage == (index + 1) ? 'active' : ''}>
          <a href="#" onClick={() => {
            this.changePage(index + 1)
          }}>{index + 1}</a>
        </li>
      )
    });

    let previousPageSelector = (<li>
        <a href="#" aria-label="Previous" onClick={() => {
          this.changePage(activePage - 1)
        }}>
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>);

    let nextPageSelector = (<li>
        <a href="#" aria-label="Next" onClick={() => {
          this.changePage(activePage + 1)
        }}>
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>);

    return (
      <nav aria-label="Search navigation">
        <ul className="pagination">
          {previousPageSelector}
          {pages}
          {nextPageSelector}
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    search: state.search
  }
}

export default connect(mapStateToProps, {googleAPISearch, newSearch})(Pagination);