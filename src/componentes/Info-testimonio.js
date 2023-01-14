import React from 'react';
import { Testimonio } from './Testimonio';


export function Info(){
  return(
    <div className='info'>
      <Testimonio 
        nombre='Sergio Cobos'
        pais='Colombia'
        imagen='sergio'
        cargo='Ingeniero de Software'
        testimonio='Primer desarrollo WEB utilizando REACT, para conocer una nueva tecnología.'
      />
      <Testimonio 
      	nombre='Sergio IA'
        pais='Realidad Virtual'
        imagen='sergioIA'
        cargo='Desarrollador Web'
        testimonio='Soy una creación con IA, con ayuda de Python y par de librerías extras.'
      />
      <Testimonio 
        nombre='Lionel Andres Messi Cuccitini'
        pais='Argentina'
        imagen='messi'
        cargo='Capitan de la selección Argentina'
        testimonio='Después de tantas derrotas, por fin somos campeónes del mundo, por fin llego el gran sueño y la tercera para Argentina'
      />
			<Testimonio 
        nombre='SERGIO COBOS DOS'
        pais='Argentina'
        imagen='sergio'
        cargo='Jugado profesional de Halo'
        testimonio='Esto es una prueba para el componente nuevo de React, de manerá dinamica, desde otro archivo llamó toda la info a mostrarse'
      />
    </div>
    );
}


