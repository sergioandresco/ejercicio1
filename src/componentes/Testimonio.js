import React from 'react';
import '../estilos/Testimonio.css';

export function Testimonio(props) {
  return ( 
    <div className = 'contenedor-testimonio' >
      <img 
        className = 'imagen-testimonio'
        src = {require(`../imagenes/testimonio-${props.imagen}.JPEG`)}
        alt='Foto de Sergio' 
      />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>
          <strong>{props.nombre}</strong> de {props.pais}
        </p>
        <p className='cargo-testimonio'>
          <strong>{props.cargo}</strong>
        </p>
        <p className='texto-testimonio'>
          {props.testimonio}
        </p>
      </div>
    </div>
  );
}
