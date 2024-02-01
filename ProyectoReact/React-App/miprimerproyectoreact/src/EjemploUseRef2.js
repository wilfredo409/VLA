import React, {useRef} from "react"

function EjemploUseRef2(){

        const entradaRef = useRef("");
      

       function MostrarValor(){
            
            
            alert(entradaRef.current.value);
        }

    
    return (
        <div>
            <h1>Ejercicio useRef 2</h1>
            <input ref={entradaRef} className="form-control" placeholder="Escriba"></input>
            <button onClick={MostrarValor} className="btn btn-primary">Captar Valor</button>
            <h3>El Valor es: {entradaRef.current.value}</h3>
            
        </div>
    )
}

export default EjemploUseRef2;
