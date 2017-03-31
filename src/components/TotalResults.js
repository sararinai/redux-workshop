import React from 'react';

const TotalResults = (props) => {
    return (
        <div className="panel panel-default">
            <div className="panel-body">
                Total results: {props.totalItems}
            </div>
        </div>
    )
};

export default TotalResults;