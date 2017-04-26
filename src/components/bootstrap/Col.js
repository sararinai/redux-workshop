import React from 'react';

const Column = ({md, className, mdOffset, children, style}) => {
  let _md = ' col-md-' + md,
      _className = ` ${className}` ? className : '',
      _offset = mdOffset ? ` col-md-offset-${mdOffset}` : '';

  let properties = {
    className: `${_md}${_offset}${_className}`
  };

  if (style) {
    properties.style = style;
  }

  return (
    <div {...properties}>
      {children}
    </div>
  );
};

Column.defaultProps = {
  md: 12,
  className: '',
  mdOffset: '',
  style: ''
};
export default Column;