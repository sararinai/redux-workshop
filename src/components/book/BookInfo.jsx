import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'react-bootstrap';

const BookInfo = ({ pages, publishedDate, industryIdentifiers, authors }) => {
  const isbns = industryIdentifiers.map(isbn => (
    <Label key={isbn.identifier}>
      {isbn.type.replace('_', ' ')} : {isbn.identifier}
    </Label>
    ));

  const labeledAuthors = authors.map((author, index) => {
    if (index < 5) {
      return (
        <Label key={author} bsStyle="primary">
          {author}
        </Label>
      );
    }
    return null;
  });

  return (
    <div>
      <Label>
        {pages} pages
      </Label>
      <Label>
        {publishedDate}
      </Label>
      {isbns}
      {labeledAuthors}
    </div>
  );
};

BookInfo.propTypes = {
  pages: PropTypes.number,
  publishedDate: PropTypes.string,
  authors: PropTypes.arrayOf(PropTypes.string),
  industryIdentifiers: PropTypes.arrayOf(
    PropTypes.shape({
      identifier: PropTypes.string,
      type: PropTypes.string,
    }),
  ),
};

BookInfo.defaultProps = {
  pages: 0,
  publishedDate: '',
  authors: [],
  industryIdentifiers: [],
};

export default BookInfo;
