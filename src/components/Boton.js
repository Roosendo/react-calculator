import React from 'react';
import '../styleSheets/Boton.css'

function Boton(props) {
const isOperator = valor => {
  return isNaN(valor) && (valor !== '.') && (valor !== '=');
};

  return(
    <div
      className={`boton-contenedor ${isOperator(props.children) ? 'operador' : ''}`.trim()}
      // Se dispara una funcion que manda a llamar a la funcion 'manejarClick'
      onClick={() => props.manejarClick(props.children)}>
      {props.children}
    </div>
  );
}

export default Boton;