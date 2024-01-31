
import React, {useState} from "react";
import './General.css';

function ContadorClicks(props){
    const[numeroLikes, setNumeroLikes] = useState(0);

    function contadordeLikes(){
       
        setNumeroLikes(numeroLikes + 1);
    }

    function disminuirContador(){
        if (numeroLikes !== 0){
        setNumeroLikes(numeroLikes - 1);
    }
    }
    function resetContador(){

        setNumeroLikes(numeroLikes - numeroLikes);
    }

    return ( <div>
        
    <h1>Ejercicio useState </h1>

    <h3>Hola</h3>
        <div className="mb-3">
            
            <div className="d-grid gap-2">
                <h3>{numeroLikes}</h3>
                <button
                    type="button"
                    name=""
                    id="botonNombre"
                    className="btn btn-success"
                    onClick={contadordeLikes}
                >
                    Aumentar
                </button>
                <button
                    type="button"
                    name=""
                    id="botonNombre"
                    className="btn btn-danger"
                    onClick={disminuirContador}
                >
                    Disminuir
                </button>
                <button
                    type="button"
                    name=""
                    id="botonNombre"
                    className="btn btn-primary"
                    onClick={resetContador}
                >
                    Reset
                </button>
            </div>





            
            
        </div>
                
                
                
                </div>);
}


export default ContadorClicks;


/* 
    Crear otro componente con el nobre EncenderCarro
    una Variable booleana
    con un boton usted va a encender o apagar
    <h4> el carro esta encendido o pagado

*/  