import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {googleAPISearch} from '../actions/index';

class GoogleAPISearch extends Component {

  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };

    this.changeFilterText = this.changeFilterText.bind(this);
    this.doSearch = this.doSearch.bind(this);
  }

  changeFilterText(event) {
    this.setState({
      term: event.target.value
    })
  }

  doSearch(event) {
    event.preventDefault();
    this.props.googleAPISearch(this.state.term);
  }

  render() {
    return (
      <form onSubmit={this.doSearch}>
        <div className="input-group">
          <input type="text"
                 className="form-control"
                 value={this.state.term}
                 onChange={this.changeFilterText}
                 placeholder="Clean code"/>
          <span className="input-group-btn">
            <input className="btn btn-primary"
                    type="submit"
                    value="Search on Google" />
          </span>
        </div>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({googleAPISearch}, dispatch);
}

export default connect(null, mapDispatchToProps)(GoogleAPISearch);
