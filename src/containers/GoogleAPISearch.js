import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {googleAPISearch} from '../actions/index';

class GoogleAPISearch extends Component {

  constructor(props) {
    super(props);

    this.state = {
      term: '',
      searchType: 'title'
    };

    this.changeFilterText = this.changeFilterText.bind(this);
    this.handleSelectorChange = this.handleSelectorChange.bind(this);
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

  doSearch(event) {
    event.preventDefault();
    this.props.googleAPISearch(this.state.term, this.state.searchType);
  }

  render() {
    return (
      <form onSubmit={this.doSearch} className="row search-form">
        <div className="col-md-2 col-sm-2" >
          <select className="form-control" onChange={this.handleSelectorChange}>
            <option value={'title'}>Title</option>
            <option value={'author'}>Author</option>
            <option value={'publisher'}>Publisher</option>
            <option value={'byquery'}>ByQuery</option>
            <option value={'isbn'}>ISBN</option>
          </select>
        </div>
        <div className="col-md-8 col-sm-8" >
          <input type="text"
                 className="form-control"
                 value={this.state.term}
                 onChange={this.changeFilterText}
                 placeholder="Clean code"/>
        </div>
        <div className="col-md-2 col-sm-2">
            <input className="btn btn-primary form-control"
                    type="submit"
                    value="Search on Google" />
        </div>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({googleAPISearch}, dispatch);
}

export default connect(null, mapDispatchToProps)(GoogleAPISearch);
