import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import fetchBooks from '../actions/index';

class BookList extends Component {

    constructor(props){
        super(props);
    }

    render(){

        let books = [];

        if (this.props.books) {
            console.log(this.props.books);
            books = this.props.books.map((book) => {
                return <div>{book.title}</div>
            });
        }

        return (
            <div>
                <div onClick={()=>{this.props.fetchBooks()}}>Book List</div>
                {books}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        books: state.books
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchBooks}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);