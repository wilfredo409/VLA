
import './App.css';
import './Testimonio.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import TestimonioH from './TestimonioH';
import banner1 from './img/1.png';
import banner2 from './img/2.jpg';
import banner3 from './img/3.png'
import Menu from './Menu';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import Footer from './footer';


function App() {
  return (
    <div className="App">
      <Menu></Menu>
      
      <header className="App-header">
       <img className="d-block" src={banner1} />
   
     
      
      <Routes>
          <Route path="testimonio" element={<TestimonioH></TestimonioH>} > </Route>
          <Route path="/" element={<Home></Home>} > </Route>
          

        </Routes>
		
		
       

   
      </header>

      <Footer></Footer>
    </div>
  );
}

export default App;
