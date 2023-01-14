import './App.css';
import {Info} from './componentes/Info-testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Pagina web con React</h1>
        <img 
        className = 'Logo'
        src = {require('./imagenes/logo192.png')}
        />
        <Info />
      </div>
    </div>
  );
}

export default App;
