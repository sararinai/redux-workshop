import React from 'react';
import { connect } from 'react-redux';
import SearchHistory from './SearchHistory';
import ViewSelector from "./ViewSelector";

const FilterResults = (props) => {
  return (
    <div>
      <div className="panel-filter panel panel-default">
        <div className="panel-heading">
            <ViewSelector />
        </div>
        <div className="panel-body">
          Total results <span className="label label-primary">{props.totalItems}</span>
        </div>
      </div>
      <SearchHistory />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    totalItems: state.search.totalItems
  };
}

export default connect(mapStateToProps)(FilterResults);