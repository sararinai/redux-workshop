import React from 'react';

const BookImage = ({link, image, alt}) =>{

  image = image.replace(/^http:/, 'https:');

  return (
    <a href={link} target="_blank">
      <img className="media-object img-thumbnail"
           src={image}
           alt={alt}/>
    </a>
  );
};

BookImage.defaultProps = {
  image: '/noimage.png'
};

export default BookImage;

