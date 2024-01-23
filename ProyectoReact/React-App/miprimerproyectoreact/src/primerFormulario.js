import React from "react";
import './General.css';

function primerFormulario(props){

    function mostrarNombre(){
        var texto = document.getElementById('textoNombre').value;

        document.getElementById("mensaje").innerHTML = texto;
        //Mostrar en h1 lo que el usuario digite
    }

    return ( <div>
        
    <h1>Inserte el nombre </h1>
        <div className="mb-3">
            <label for="" className="form-label tituloPersonalisado">Nombre</label>
            <input
                type="text"
                className="form-control"
                name=""
                id="textoNombre"
                aria-describedby="helpId"
                placeholder=""
            />
            <br/>
            <div className="d-grid gap-2">
                <button
                    type="button"
                    name=""
                    id="botonNombre"
                    className="btn btn-primary"
                    onClick={mostrarNombre}
                >
                    Enviar
                </button>
                <h1 id="mensaje"></h1>
            </div>
            
        </div>
                
                
                
                </div>);
}


export default primerFormulario;