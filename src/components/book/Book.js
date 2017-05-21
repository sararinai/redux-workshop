import React, { Component } from 'react';
import BookImage from './BookImage.jsx';
import BookDescription from './BookDescription.jsx';
import BookInfo from './BookInfo';

class Book extends Component {

  render() {

    if (this.props.book == 'undefined') {
      return null;
    }

    let book = this.props.book,
      {volumeInfo: info} = book,
      limitedDescription = info.description &&
        info.description.substr(0, 800).concat(info.description.length > 800 ? '...' : ''),
      pages = info.pageCount;

    let bookImage = this.props.activeView !== 'list-view' && (
        <BookImage link={info.previewLink ? info.previewLink : '#'}
                   image={info.imageLinks ? info.imageLinks.thumbnail : '/noimage.png'}
                   alt={info.title}/>
    );

    let bookInfo = this.props.activeView !== 'list-view' && (
        <BookInfo pages={pages}
                  averageRating={info.averageRating}
                  publishedDate={info.publishedDate}
                  industryIdentifiers={info.industryIdentifiers}
                  authors={info.authors}/>
    );

    let bookDescription = (
        <BookDescription title={info.title}
                         categories={info.categories}
                         publisher={info.publisher}
                         description={limitedDescription}/>
    );

    return (
      <div className="media">
        <div className="media-left">
            { bookImage }
            { bookInfo }
        </div>
        <div className="media-body">
            {bookDescription}
        </div>
      </div>
    );
  }
}

export default Book;