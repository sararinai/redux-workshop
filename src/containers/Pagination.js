import React, {Component} from 'react';
import {connect} from 'react-redux';
import {changePage} from '../actions/index';

/**
 * Created by rafael on 27/03/17.
 */
class Pagination extends Component {
  constructor(props) {
    super(props);

    this.changePage = this.changePage.bind(this);
  }

  changePage(newPage){
    this.props.changePage(newPage);
  }

  render() {

    let {activePage, totalPages} = this.props.search;


    //TODO change selector edges cases behaviour...
    let previousPageSelector = activePage !== 1 && (<li>
        <a href="#" aria-label="Previous" onClick={() => {
          this.changePage(activePage - 1)
        }}>
          <span aria-hidden="true">&laquo; Prev</span>
        </a>
      </li>);

    let nextPageSelector = totalPages > activePage &&(<li>
        <a href="#" aria-label="Next" onClick={() => {
          this.changePage(activePage + 1)
        }}>
          <span aria-hidden="true">Next &raquo;</span>
        </a>
      </li>);

    return (
      this.props.search.status === 'DONE' &&
      <nav aria-label="Search navigation">
        <ul className="pagination">
          {previousPageSelector}
          {/*{pages}*/}
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

export default connect(mapStateToProps, {changePage})(Pagination);