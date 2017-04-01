import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {googleAPISearch} from '../actions/index';

class GoogleAPISearch extends Component {

  constructor(props) {
    super(props);

    this.state = {
      term: '',
      searchType: 'title',
      maxResults: 20
    };

    this.changeFilterText = this.changeFilterText.bind(this);
    this.handleSelectorChange = this.handleSelectorChange.bind(this);
    this.handlePageSelectorChange = this.handlePageSelectorChange.bind(this);
    this.doSearch = this.doSearch.bind(this);
  }

  changeFilterText(event) {
    this.setState({
      term: event.target.value
    })
  }

  handleSelectorChange(event) {
    this.setState({
      searchType: event.target.value
    })
  }

  handlePageSelectorChange(event) {
    this.setState({
      maxResults: event.target.value
    })
  }

  doSearch(event) {
    event.preventDefault();
    this.props.googleAPISearch(
      this.state.term,
      this.state.searchType,
      this.state.maxResults
    );
  }

  render() {
    return (
      <form onSubmit={this.doSearch} className="row search-form">
        <div className="col-md-2 col-sm-2">
          <select className="form-control"
                  onChange={this.handleSelectorChange}>
            <option value={'title'}>Title</option>
            <option value={'author'}>Author</option>
            <option value={'publisher'}>Publisher</option>
            <option value={'byquery'}>ByQuery</option>
            <option value={'isbn'}>ISBN</option>
          </select>
        </div>
        <div className="col-md-1 col-sm-1">
          <select className="form-control"
                  onChange={this.handlePageSelectorChange}>
            <option value={20}>20</option>
            <option value={40}>40</option>
          </select>
        </div>
        <div className="col-md-7 col-sm-7">
          <input type="text"
                 className="form-control"
                 value={this.state.term}
                 onChange={this.changeFilterText}
                 placeholder="Clean code"/>
        </div>
        <div className="col-md-2 col-sm-2">
          <input className="btn form-control"
                 type="submit"
                 value="Search on Google"/>
        </div>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({googleAPISearch}, dispatch);
}

export default connect(null, mapDispatchToProps)(GoogleAPISearch);
