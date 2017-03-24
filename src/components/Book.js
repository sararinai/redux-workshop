import React, {Component} from 'react';

class Book extends Component {
  render(){

    let book = this.props.book;

    if (!book) {
      return null;
    }

    let categories = book.volumeInfo.categories &&
      book.volumeInfo.categories.map((category) => {
      return <span key={category} className="label label-success">{category}</span>;
    });

    let isbns = book.volumeInfo.industryIdentifiers &&
      book.volumeInfo.industryIdentifiers.map((isbn) => {
      return (
        <span key={isbn.identifier}
              className="label label-default">
          {isbn.type.replace('_', ' ')} : {isbn.identifier}
        </span>
      );
    });

    let textSnippet = book.searchInfo && book.searchInfo.textSnippet;
    let description = book.volumeInfo.description;

    return (
      <div className="media">
        <div className="media-left">
          <a href="#">
            {book.volumeInfo.imageLinks &&
              <img className="media-object img-thumbnail"
                 src={book.volumeInfo.imageLinks.thumbnail}
                 alt={book.volumeInfo.title} />
            }
          </a>
          <span className="label label-default">{book.volumeInfo.pageCount} pages</span>
          {isbns}

        </div>
        <div className="media-body">
          <h4 className="media-heading">{book.volumeInfo.title}</h4>
          {categories} {book.volumeInfo.publisher && '-'} {book.volumeInfo.publisher}
          <p style={{fontSize:12, textAlign:'justify'}}>{description}</p>
        </div>
      </div>
    );
  }
}

export default Book;