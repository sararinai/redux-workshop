import React from 'react';
import AtrapaloLogo from './AtrapaloLogo';
import DateHeader from './DateHeader';

const Header = () => {
  return (
    <div className="row header">
      <div className="clearfix">
        <AtrapaloLogo />
        <div className="col-md-8" style={{margin:'0 auto'}}>
          <h1 style={{textAlign: 'right', verticalAlign: 'middle', color:'white'}}
              className="right">
            DT - TECH LIBRARY
          </h1>
          <DateHeader />
        </div>
      </div>
    </div>
  );
};

export default Header;
