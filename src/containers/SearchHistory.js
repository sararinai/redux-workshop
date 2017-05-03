import React, {Component} from 'react';
import {connect} from 'react-redux';
import {newSearch} from './../actions/index';

export class SearchHistory extends Component {

  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(search) {
    this.props.newSearch(
      search.searchTerm,
      search.searchType,
      10,
      0
    );
  }


  render() {
    let searchList = this.props.searchHistory.map((search, index) => {
      return (
        <button
          key={index}
          type="button"
          className="list-group-item"
          onClick={() => {this.handleSearch(search)}}
        >
          {search.searchTerm} <span className="badge">{search.searchType}</span>
        </button>
      );
    });

    return (
      <div className="list-group">
        {searchList}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchHistory: state.searchHistory
  }
}

export default connect(mapStateToProps, {newSearch})(SearchHistory);