import React, { useEffect, useState } from "react";

function TemporizadorVLA() {

    const [contador, setContador] = useState(0);

    useEffect(()=>{
        const intervalorId = setInterval(()=>{
            setContador((prevContador)=> prevContador+ 1);
           /* if (contador === 10)
            {
                alert("Au sesion ya esta por terminar");
                
            }

            if(contador >=15){
                alert("Lo siento tiene que irse");
            }*/
        }, 1000000)

        return ()=>{

            clearInterval(intervalorId);
        }
        
    });


    return(
        <div>
            <h1>Ejercicio de useEffect</h1>
            <h3>Contador: {contador}</h3>
        </div>
    );

  }

  export default TemporizadorVLA;