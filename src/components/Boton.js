import React from 'react';
import '../styleSheets/Boton.css'

function Boton(props) {
const isOperator = valor => {
  return isNaN(valor) && (valor !== '.') && (valor !== '=');
};

  return(
    <div
      className={`boton-contenedor ${isOperator(props.children) ? 'operador' : ''}`.trim()}>
      {props.children}
    </div>
  );
}

export default Boton;