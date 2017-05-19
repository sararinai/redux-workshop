import React from 'react';

const BookContainer = ({children, activeClass, activeView}) =>{

  const height = activeView !== 'list-view' ? 400 : 'initial';

  return (
    <div className={activeClass}
         style={{height, padding: 10, overflow:'hidden'}}>
      {children}
    </div>
  );
};

export default BookContainer;