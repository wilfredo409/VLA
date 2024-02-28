
import './App.css';
import './Testimonio.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import TestimonioH from './TestimonioH';
import Testimonio from './Testimonio';
import Menu from './Menu';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <header className="App-header">
      <Routes>
          <Route path="testimonio" element={<TestimonioH></TestimonioH>} > </Route>
          <Route path="/testimonioP" element={<Testimonio nombre="Julieta Santos"
        edad={35}
        cargo = "Empresaria"
        comentario="La mejor empresa de cuidado de adulto mayor                                                             "
        calificacion="★★★★"
        fecha="15/06/2023"
        imagen="1"></Testimonio>} > </Route>
          

        </Routes>
		
		
       
    
   
      </header>
    </div>
  );
}

export default App;
