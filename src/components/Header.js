import React from 'react';
import AtrapaloLogo from './AtrapaloLogo';

export default () => {
  var options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};

  return (
    <div style={{backgroundColor:'#de0000'}} className="jumbotron">
      <div className="clearfix">
        <AtrapaloLogo />
        <div className="col-md-8" style={{margin:'0 auto'}}>
          <h1 style={{textAlign: 'right', verticalAlign: 'middle', lineHeight:2, color:'white'}}
              className="right">
            DT - Tech Library
          </h1>
          <span style={{float:'right'}}>{new Date().toLocaleDateString('es-ES', options)}</span>
        </div>
      </div>
    </div>
  );
};