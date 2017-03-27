import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchBooks} from '../actions/index';
import Book from '../components/book/Book';

class BookList extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount() {
        //this.props.fetchBooks();
    }

    render(){
        let activeClass = this.props.activeView == '3books-view'
          ? 'col-md-4 col-sm-6' : 'col-md-12 col-sm-12';

        let books = this.props.books.map((book, index) => {
            return (
                <div key={book.id}
                     className={activeClass}
                     style={{height:400, padding:10}}>
                    <Book book={book}/>
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
    books: state.books,
    activeView: state.activeView
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchBooks}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
