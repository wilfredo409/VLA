import React, {useState} from "react";

function EjemploDirectivaIF(){

    
    const [edad, setEdad] = useState(7);
    const [mensaje, setMensaje] = useState ("");
    function CambiarEdad(e){
       
        const nuevaEdad = e.target.value;
        setEdad(isNaN(nuevaEdad) ? 0 : nuevaEdad);
    }
    function CalcularEdad(){
        if(edad>=18)
            setMensaje("Es Mayor de edad");
        else
            setMensaje("Es Menor de Edad");
    }

    return(
        <div>
            <h1>Ejemplo de IF</h1>
            <input className="form-control" value={edad} onChange={CambiarEdad}></input>
            <button className="btn btn-success" onClick={CalcularEdad}>Calcular</button>
            <p>{mensaje}</p>
            
            {edad >= 18 ?(
                <p>La persona es mayor de edad</p>
            ): (
                <p>La persona es menor de edad</p>
            )}
        </div>
    )

}

export default EjemploDirectivaIF;