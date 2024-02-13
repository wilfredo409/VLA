import React, {useState} from "react";
import './contrasena.css';

function CambiarContrasena() {

    const [contrasenaNueva, setContrasena] = useState("");
    
      
    function CambiarContrasena(){
     


        var contrasenaAnterior = document.getElementById("contra1").value
        setContrasena(document.getElementById("contra2"))

        

        if (contrasenaNueva.value === contrasenaAnterior){
            alert("Contrasena Cambiada su nueva contrasena es: " + contrasenaNueva.value);
            setContrasena(contrasenaNueva);
        }
        else
            alert("Las contraseñas no son correctas" + contrasenaAnterior);
    }

    return(
        <div>
        <h1>Cambio de Contrasena</h1>
       <form id="form_Modal" className="needs-validation" >
        <div className="mb-3">
          <label for="" className="form-label">Digite su contrasena nueva</label>
          <input required type="password"
            className="form-control debil"  name="" id="contra1" aria-describedby="helpId" placeholder=""/>
          <label for="" className="form-label">Repita su contrasena nueva</label>
          <input required type="password"
            className="form-control debil" name="" id="contra2" aria-describedby="helpId" placeholder=""/>
            <br></br>
          <div className="d-grid gap-2">
            <button type="button" name="" id="" className="btn btn-primary" onClick={CambiarContrasena}>Actualizar</button>
          </div>
         
        </div>
        </form>
      </div>
    )
  }
  export default CambiarContrasena;

  /*
  Si la contraseña tiene menos de 10 caracteres, entonces de color rojo
  si tiene entre 11 y 13 caracteres, entonces de color amarillo
  si tiene mas de 14 caracteres, entonces usted coloque de color verde

  Usted tiene que validar que ambas contraseñas son iguales.

  Onclick Para validar con las contraseñas, la nueva y la confirmacion
  onInput para validar la seguridad de la contraseña

  Opcional: que tenga al menos un caracter especial /*.!$
  
  
  
  */