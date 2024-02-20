import React from 'react';
import logo from './logo.svg';
import './App.css';
import Formulario1 from './Formulario1'
import SumarDosValores from './SumarDosValores';
import AprendiendoListas from './AprendiendoListas';
import ContadordeClicks from './ContadordeClicks';
import ContadorHooks from './ContadorHook';
import EstadoCivil from './EstadoCivil';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <Formulario1 
       nombre="Edwin Ceron"
       edad={35}
       correo='edwin@ceron.com'></Formulario1>

       <SumarDosValores></SumarDosValores>
       <AprendiendoListas></AprendiendoListas>
       <ContadordeClicks></ContadordeClicks>
       <ContadorHooks></ContadorHooks>
       <EstadoCivil></EstadoCivil>

      </header>
    </div>
  );
}

export default App;
