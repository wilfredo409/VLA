import React from "react";

function Saludar(props){

    return ( <div>
        <div>
    <h1>Hola Mundo </h1>
                <p>Les saluda {props.nombre} - {props.apellido}</p> 
                <p>Mi extencion es: {props.ext}</p>
                </div>
                <div>
                    <h1>Este es el segundo div</h1>
                </div>
                </div>);
}

export default Saludar;