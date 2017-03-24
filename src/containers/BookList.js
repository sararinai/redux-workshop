import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchBooks} from '../actions/index';
import Book from '../components/Book';

class BookList extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount() {
        //this.props.fetchBooks();
    }

    render(){
        let books = this.props.books.map((book, index) => {
            return (
            <div key={book.id}
                 className="row"
                 style={{padding: '10px 0'}}
            >
                <div className="col-md-12" >
                    <Book book={book}/>
                </div>
            </div>
            );
        });

        return (
            <div>
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchBooks}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
