import logo from './logo.svg';
import './App.css';
import PrimerFormulario from './primerFormulario';
import ContadorClicks from './ContadordeCLicks';
import ControlandoContadorLikes from './ControlandoContadorLikes';
import EncenderCarro from './EncenderCarro';
import EjemploUseEffectVector from './EjemploUseEffectVector';
import TemporizadorVLA from './TemporizadorVLA';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        <PrimerFormulario></PrimerFormulario>
        <ContadorClicks></ContadorClicks>
        <EncenderCarro></EncenderCarro>
        <ControlandoContadorLikes></ControlandoContadorLikes>
        <EjemploUseEffectVector></EjemploUseEffectVector>
        <TemporizadorVLA></TemporizadorVLA>

      </header>
    </div>
  );
}

export default App;
