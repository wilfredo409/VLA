import React from "react";
import Persona from "./models/persona";
import MiComponentePersonalizado from "./MicomponentePersonalizado";
import MiComponentePersonalizadoPadre2 from "./MicomponentePersonalizadoPadre2";

const MiComponentePersonalizadoPadre : React.FC = () =>{
    
    const personaEjemplo = new Persona("Edwin", "Ceron", "Sandoval", 35);

    return (
        <div>
            <h3>Informacion de la persona</h3>
            <MiComponentePersonalizado 
            persona={personaEjemplo}></MiComponentePersonalizado>
            <MiComponentePersonalizadoPadre2></MiComponentePersonalizadoPadre2>
        </div>
    )
}

export default MiComponentePersonalizadoPadre;