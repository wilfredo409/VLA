
import React, {useState} from "react";
import './General.css';

function EncenderCarro(props){
    const[estado, setNumeroLikes] = useState(false);
    var estadoreal= "";

    function encender(){
       
        setNumeroLikes(!estado);
    }

   
    if (estado === true){
        estadoreal = "El Carro esta encendido";
    }else{
        estadoreal = "El Carro esta apagado";
    }

    return ( <div>
        
    <h1>Estado del carro </h1>

    <h3>Hola</h3>
        <div className="mb-3">
            
            <div className="d-grid gap-2">
                <h4>{estado}</h4>
                <h4>{estadoreal}  El carro esta: {estado == false ? "Encendido" : "Apagado"}</h4>
                <button
                    type="button"
                    name=""
                    id="botonNombre"
                    className="btn btn-warning"
                    onClick={encender}
                >
                    Encender / Apagar
                </button>
                
                
            </div>





            
            
        </div>
                
                
                
                </div>);
}


export default EncenderCarro;