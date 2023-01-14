import './App.css';
import {Testimonio} from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Pagina web con React</h1>
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
      </div>
    </div>
  );
}

export default App;
