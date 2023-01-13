import React from 'react';

export function Testimonio() {
  return ( 
    <div className = 'contenedor-testimonio' >
      <img 
        className = 'imagen-testimonio'
        src = {require('../imagenes/testimonio-sergio.JPEG')}
        alt='Foto de Sergio' 
      />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>Primera pagina web con React</p>
        <p className='cargo-testimonio'>Ingeniero de Sistemas</p>
        <p className='texto-testimonio'>Esta es la primera prueba de creación de una pagina web utilizando React y JavaScript</p>
      </div>
    </div>
  );
}
