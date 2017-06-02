import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeView} from '../actions/index';
import DeleteRegister from './DeleteRegister';


class LastSearchesList extends Component {
    render() {
        return (
            <ul className="list-group">
                {this.props.listSearch.map((element, index)=>(<li key={index} className="list-group-item">{element}<DeleteRegister searchId={index} /></li>))}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        listSearch: state.listSearch
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({changeView}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LastSearchesList);
