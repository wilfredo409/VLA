import React from "react";
import './Testimonio.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {NavLink} from "react-router-dom";


const Menu: React.FC=()=>{

    return (
        <div>
           
           <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-70">
  <div className="container">
  
    <a className="navbar-brand" href="#">INNOVA<i className="tituloc">CARE</i></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/" className="nav-link active" >Inicio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/beneficios" className="nav-link" >Beneficios</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/formulario" className="nav-link" >Contactenos</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/testimonio" className="nav-link" >Testimonios</NavLink>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
           


        </div>
    )
}

export default Menu;