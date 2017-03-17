import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchBooks} from '../actions/index';

class BookList extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.fetchBooks();
    }

    render(){
        let books = this.props.books.map((book) => {
            return <div key={book.id} >{book.title} - {book.author}</div>
        });

        return (
            <div>
                <div>Book List</div>
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