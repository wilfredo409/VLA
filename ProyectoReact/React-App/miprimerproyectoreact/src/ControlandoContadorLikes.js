import React, {useEffect, useState}  from "react";

function ControlandoContadorLikes(){
    const [contador, setContador] = useState(0);
    const [contador2, setContador2] = useState(0);


    function AumentarContador(){
        setContador(contador+ 1);
    }
    function AumentarContador2(){
        setContador2(contador2+ 1);
    }

    function DisminuirContador(){
        setContador(contador- 1)
    }

    useEffect(()=>{
        console.log("Esta dando click")
        if(contador >= 5 && contador < 10){
            document.getElementById("mensajeControlandoClics").innerHTML = "Segura";
        }
        else if (contador > 10)
        document.getElementById("mensajeControlandoClics").innerHTML = "Muy segura";
    }, [contador, contador2])

    return(
        <div>
            <h1>Ejercicio useEffect</h1>
            <h3>Numero clics contador 1: {contador}</h3>
            <h3>Numero clics contador 2: {contador2}</h3>
            <button className="btn btn-success" onClick={AumentarContador}>Aumentar</button>
            <button className="btn btn-warning" onClick={AumentarContador2}>Aumentar 2</button>
            <button className="btn btn-danger" onClick={DisminuirContador}>Disminuir</button>
            <h3 id="mensajeControlandoClics">Muy Basica</h3>
        </div>
    );


}

export default ControlandoContadorLikes;