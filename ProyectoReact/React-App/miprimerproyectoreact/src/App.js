import logo from './logo.svg';
import './App.css';
//import PrimerFormulario from './primerFormulario';
import ContadorClicks from './ContadordeCLicks';

import EncenderCarro from './EncenderCarro';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       

        <ContadorClicks></ContadorClicks>
        <EncenderCarro></EncenderCarro>
      </header>
    </div>
  );
}

export default App;
