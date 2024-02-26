import React from "react";
import Persona from "./models/persona";

const MiComponentePersonalizadoPadre2 : React.FC = () =>
{
    const personas: Persona[] = [];
    
    const personaEjemplo = new Persona("Edwin", "Ceron", "Contreras", 35);
    const personaEjemplo1 = new Persona("Javier", "Ceron", "Contreras", 29);
    const personaEjemplo2 = new Persona("Mateo", "Ceron", "Santos", 10);
    const personaEjemplo3 = new Persona("Sofia", "Ceron", "Santos", 6);

    personas.push(personaEjemplo);
    personas.push(personaEjemplo1);
    personas.push(personaEjemplo2);
    personas.push(personaEjemplo3);
    return (
        <div>
            <h3>Las personas registradas son:</h3>
            <table>
                <thead>
                    <th>Nombre</th>
                    <th>Pimer Apellido</th>
                    <th>Segundo Apellido</th>
                    <th>Edad</th>
                </thead>
                <tbody>
                    
                        {personas.map((per, index) =>(
                          <tr key={index}>
                            <td>{per.nombre}</td>
                            <td>{per.apellido1}</td>
                            <td>{per.apellido2}</td>
                            <td>{per.edad}</td>

                          </tr>
                        ))}
                    
                </tbody>
            </table>
        </div>
    )
}

export default MiComponentePersonalizadoPadre2;