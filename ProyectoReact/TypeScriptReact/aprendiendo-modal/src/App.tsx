
import './App.css';
import ModalSaludando from './ModalSaludando';
import ModalSiguiente from './ModalSiguiente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Aplicacion de React mi primer Modal</h1>
        <ModalSaludando></ModalSaludando>
        <ModalSiguiente></ModalSiguiente>
      </header>
    </div>
  );
}

export default App;
