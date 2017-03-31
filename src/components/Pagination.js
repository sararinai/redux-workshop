import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changePage} from '../actions/index';

/**
 * Created by rafael on 27/03/17.
 */
class Pagination extends Component {
  constructor(props) {
    super(props);

    this.changeViewToPage = this.changeViewToPage.bind(this);
  }

  changeViewToPage(page){
    this.props.changePage(page);
  }

  render() {

    let activePage = 6,
        totalPages = 6;

    let pages = [...Array(totalPages)].map((page, index) => {
      return (
        <li key={index} className={activePage == (index + 1) ? 'active' : ''}>
          <a href="#" onClick={() => this.changeViewToPage(index +1)}>{index + 1}</a>
        </li>
      )
    });

    let previousPageSelector = activePage !== 1 && (<li>
      <a href="#" aria-label="Previous" onClick={() => this.changeViewToPage(activePage - 1)}>
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>);

    let nextPageSelector = activePage < totalPages && (<li>
        <a href="#" aria-label="Next" onClick={() =>this.changeViewToPage(activePage + 1)}>
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({changePage}, dispatch);
}

export default connect(null, mapDispatchToProps)(Pagination);