import React, {useState} from "react";


const ContadordeClicks: React.FC = () =>{

    const [dato, setDato] = useState<number>(0);
    
    const Aumentar = () =>{
       setDato(dato + 1)
    }

    const Disminuir = () => {
        if(dato >= 1)
        setDato(dato - 1)
    }

    return(
        <div>
            <h1>Contador de clicks</h1>
           
           <h3>{dato}</h3>
           <button onClick={Aumentar}>Incrementar</button>

            <button onClick={Disminuir}>Disminuir</button>
        </div>
    )
}

export default ContadordeClicks;