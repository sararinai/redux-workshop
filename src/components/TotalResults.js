import React from 'react';

const TotalResults = (props) => {
    return (
        <div className="panel panel-primary">
            <div className="panel-header">
              <span className="label label-primary">{props.totalItems}</span> Total results
            </div>
        </div>
    )
};

export default TotalResults;