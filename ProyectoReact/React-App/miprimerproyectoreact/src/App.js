import logo from './logo.svg';
import './App.css';
import PrimerFormulario from './primerFormulario';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       

        <PrimerFormulario></PrimerFormulario>
        
      </header>
    </div>
  );
}

export default App;
