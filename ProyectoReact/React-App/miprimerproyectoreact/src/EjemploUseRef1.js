import React, {useRef, useState} from "react"

function EjemploUseRef1(){

    const constanteRef = useRef("Apagado");
    const [constanteState, setConstanteState] = useState("Apagado")

    function Encender(){

        console.log("Estado es:" + constanteRef.current);
        constanteRef.current = "Encendido";
        setConstanteState("Encendido");

    }
    function Apagar(){

        console.log("Estado es:" + constanteRef.current);
        constanteRef.current = "Apagado";
        setConstanteState("Apagado");

    }

    return (
        <div>
            <h1>Ejercicio useRef</h1>
            <h3>Valor Actual Ref:{constanteRef.current}</h3>
            <h3>Valor Actual State:{constanteState}</h3>
            <button className="btn btn-success"
                onClick={Encender}>
                    Encender </button>
            <button className="btn btn-danger"
                onClick={Apagar}>
                    Apagar </button>
        </div>
    )
}

export default EjemploUseRef1;

