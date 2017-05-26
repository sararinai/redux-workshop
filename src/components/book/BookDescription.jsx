import React from 'react';
import PropTypes from 'prop-types';
import Label from 'react-bootstrap/lib/Label';

const BookDescription = ({ title, categories, publisher, description }) => {
  const labeledCategories = categories.map(category => (
    <Label
      key={category}
      bsStyle="success"
    >{category}</Label>
  ));

  return (
    <div>
      <h4 className="media-heading">{title}</h4>
      {labeledCategories} {publisher && '-'} {publisher}
      <p className="description">
        {description}
      </p>
    </div>
  );
};

BookDescription.propTypes = {
  title: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string),
  publisher: PropTypes.string,
  description: PropTypes.string,
};

BookDescription.defaultProps = {
  categories: [],
  publisher: '',
  description: '',
};

export default BookDescription;
