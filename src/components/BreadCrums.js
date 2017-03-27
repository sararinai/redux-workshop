import React from 'react';

const BreadCrums = (props) => {

  let items = props.items.map((item) => {
    return (
      <li key={item} className={item == props.active ? 'active': ''}><a href="#">{item}</a></li>
    );
  });

  return (
    <div className="row">
      <ol className="breadcrumb">
        {items}
      </ol>
    </div>
  );
};

export default BreadCrums;