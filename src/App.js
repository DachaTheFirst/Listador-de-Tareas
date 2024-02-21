import './App.css';
import freecodeCampLogo from './imagenes/freecodecamp-logo.png';
import ListaDeTareas from './componenetes/ListaDeTareas';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='freecodecamp-logo-contenedor'>
        <img
        src={freecodeCampLogo}
        className='freecodecamp-logo' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1> 
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
