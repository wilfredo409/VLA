import React, {useReducer} from "react";
type Action = {
    type: 'Soltero'
} | {type : 'Casado'}

type Persona = {nombre: string} | {EstadoCivil: 'soltero'|'casado'}

const personaReducer = (state: Persona, action: Action): Persona =>
{
    switch(action.type){
        case 'Casado':
            return {...state, EstadoCivil:'casado'};
            
        case 'Soltero':
            return {...state, EstadoCivil:'soltero'};
        default:
            return state;        
       
    }
}


const EstadoCivil: React.FC = ()=> {
    const [persona, dispatch] = useReducer(personaReducer, {nombre:"Edwin", EstadoCivil:"soltero"});
   
    return(
        <div>
             <div>
            <h1>Digite su nombre</h1>
            <form>
            <input type="text" id="name"></input>
           
            <button onClick={() => dispatch({type:'Soltero'})}>Soltero</button>
            <button onClick={() => dispatch({type:'Casado'})}>Casado</button>
            
            </form>
        </div>

        </div>
    )
}

export default EstadoCivil;