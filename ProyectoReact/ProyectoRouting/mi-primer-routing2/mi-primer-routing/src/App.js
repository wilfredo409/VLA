
import './App.css';
import Home from './home';
import Contact from './contact';
import About from './about';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="contact" element={<Contact></Contact>} > </Route>
          <Route path="about" element={<About></About>} > </Route>
          <Route path="/" element={<Home></Home>} > </Route>

        </Routes>
      </header>
    </div>
  );
}

export default App;
