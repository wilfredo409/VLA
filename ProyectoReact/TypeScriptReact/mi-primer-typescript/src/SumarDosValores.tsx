import React, { useState } from "react";

const SumarDosValores: React.FC = () =>
{
    const [valor1, setValor1] = useState<number>(0);
    const [valor2, setValor2] = useState<number>(0);
    const [resultado, setResultado] = useState<number>(0);
    function Sumar(){
        const result = valor1 + valor2;
        setResultado(result);
    }    
    return(
        <div>
            <h3>Digite el Valor 1</h3>
            <input type="number" className="form-control"
             onChange={(e) => setValor1(parseInt(e.target.value,10))}></input>
            <h3>Digite el Valor 2</h3>
            <input type="number" className="form-control"
            onChange={(e) => setValor2(parseInt(e.target.value,10))}></input>
            <br></br>
            <button onClick={Sumar}>Sumar</button>
            <h1>El resultado es: {resultado}</h1>
        </div>
    )
}

export default SumarDosValores;     