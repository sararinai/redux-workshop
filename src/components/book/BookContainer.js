import React from 'react';

const BookContainer = ({children, activeClass}) =>{
  return (
    <div className={activeClass}
         style={{height: 400, padding: 10}}>
      {children}
    </div>
  );
};

export default BookContainer;