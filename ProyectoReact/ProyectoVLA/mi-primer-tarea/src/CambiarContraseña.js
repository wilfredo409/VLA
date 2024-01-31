import React from "react";

function CambiarContrasena() {

    return(
        <div>
            <h1>Cambiando Contraseña</h1>
            <input className="form-control" type="password" placeholder="Ingresa contraseña"></input>
            <br></br>
            <input className="form-control" type="password" placeholder="Confirmar contraseña"></input>
            <br></br>
            <button className="btn btn-primary">Cambiar contraseña</button>

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