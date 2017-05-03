import React from 'react';
import AtrapaloLogo from './AtrapaloLogo';
import {Col} from 'react-bootstrap';

const Header = () => {
  let options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};

  //#de0000
  return (
    <div>
      <AtrapaloLogo />
      <Col md={8} style={{margin:'0 auto'}}>
        <h1 style={{textAlign: 'right', verticalAlign: 'middle', color:'white'}}
            className="right">
          DT - TECH LIBRARY
        </h1>
        <span style={{float:'right', color:'white'}}>{new Date().toLocaleDateString('es-ES', options)}</span>
      </Col>
    </div>
  );
};

export default Header;