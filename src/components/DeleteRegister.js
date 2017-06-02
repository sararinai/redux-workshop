import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteSearch} from '../actions/index';


class DeleteRegister extends Component {

    render() {
        return (
            <button type="button"
                    className="close text-left"
                    aria-label="Close"
                    onClick={() => this.props.deleteSearch(this.props.searchId)}
            >
                <span aria-hidden="true">&times;</span>
            </button>
        );
    }
}

function mapStateToProps(state) {
    return {
        test: state.test
    }
}

export default connect(mapStateToProps, {deleteSearch})(DeleteRegister);
