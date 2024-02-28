import React from "react";
import './Testimonio.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {NavLink} from "react-router-dom";

const Menu: React.FC=()=>{

    return (
        <div>
           
           <ul
            className="nav nav-tabs"
            id="navId"
            role="tablist"
           >
            <li className="nav-item">
                <NavLink
                    to="/testimoniop"
                    className="nav-link active"
                    data-bs-toggle="tab"
                    aria-current="page">Active</NavLink>
            </li>
            <li className="nav-item dropdown">
                <a
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false">Dropdown </a>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="#tab2Id">Action</a>
                    <a className="dropdown-item" href="#tab3Id">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#tab4Id">Action</a>
                </div>
            </li>
            <li className="nav-item" role="presentation">
                <a href="#tab5Id" className="nav-link" data-bs-toggle="tab"
                    >Another link</a>
            </li>
            <li className="nav-item" role="presentation">
                <NavLink to="/testimonio" className="nav-link" data-bs-toggle="tab"
                    >Testimonio</NavLink>
            </li>
           </ul>
           
          
           <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="tab1Id" role="tabpanel">
                
            </div>
            <div className="tab-pane fade" id="tab2Id" role="tabpanel"></div>
            <div className="tab-pane fade" id="tab3Id" role="tabpanel"></div>
            <div className="tab-pane fade" id="tab4Id" role="tabpanel"></div>
            <div className="tab-pane fade" id="tab5Id" role="tabpanel"></div>
           </div>
           
          
           <script>
            var triggerEl = document.querySelector("#navId a");
            bootstrap.Tab.getInstance(triggerEl).show(); // Select tab by name
           </script>
           


        </div>
    )
}

export default Menu;