import React from 'react';
import AtrapaloLogo from './AtrapaloLogo';

const Header = () => {
  var options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};

  //#de0000
  return (
    <div style={{backgroundColor:'darkslateblue'}} className="row">
      <div className="clearfix">
        <AtrapaloLogo />
        <div className="col-md-8" style={{margin:'0 auto'}}>
          <h1 style={{textAlign: 'right', verticalAlign: 'middle', color:'white'}}
              className="right">
            DT - TECH LIBRARY
          </h1>
          <span style={{float:'right', color:'white'}}>{new Date().toLocaleDateString('es-ES', options)}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;