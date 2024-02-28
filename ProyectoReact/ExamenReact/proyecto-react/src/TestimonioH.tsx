import React from "react";
import Testimonio from './Testimonio';
import './Testimonio.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const TestimonioH : React.FC =() =>{
    return(
        <div>
            <div className="caja">
            <Testimonio 
        nombre="Julieta Santos"
        edad={35}
        cargo = "Empresaria"
        comentario="La mejor empresa de cuidado de adulto mayor                                                             "
        calificacion="★★★★"
        fecha="15/06/2023"
        imagen="1"></Testimonio>
        <Testimonio 
        nombre="Edwin Ceron"
        edad={25}
        cargo = "Programador"
        comentario="Excelente atencion de los pacientes, muchas gracias"
        calificacion="★★★★★"
        fecha="26/12/2023"
        imagen="2"></Testimonio>
        <Testimonio 
        nombre="Rosa Santos"
        edad={67}
        cargo = "Pensionada"
        comentario="Muy amables y excelente trato, muchas gracias"
        calificacion="★★★★★"
        fecha="01/02/2024"
        imagen="3"></Testimonio>
        </div>
        </div>
    )
}

export default TestimonioH;