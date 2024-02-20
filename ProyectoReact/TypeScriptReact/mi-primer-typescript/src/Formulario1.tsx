import React from "react";

interface miFormulario1ComponentProps{
    nombre: string;
    edad: number;
    correo: string;
}

const Formulario1: React.FC<miFormulario1ComponentProps> = ({nombre, edad, correo})=>{

    return (
        <div className="container">
            <h1>Mi nombre es: {nombre}</h1>
            <h1>Mi edad es: {edad}</h1>
            <h1>Mi correo es: {correo}</h1>
        </div>
    )
}

export default Formulario1;