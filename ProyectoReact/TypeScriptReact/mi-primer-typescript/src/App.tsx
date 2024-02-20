import React from 'react';
import logo from './logo.svg';
import './App.css';
import Formulario1 from './Formulario1'
import SumarDosValores from './SumarDosValores';

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
      </header>
    </div>
  );
}

export default App;
