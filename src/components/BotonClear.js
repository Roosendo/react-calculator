import React, { Children } from 'react';
import '../styleSheets/BotonClear.css';

const BotonClear = (props) => (
  <div className='boton-clear'
    onClick={props.manejarClear}>
    {props.children}
  </div>
);

export default BotonClear;