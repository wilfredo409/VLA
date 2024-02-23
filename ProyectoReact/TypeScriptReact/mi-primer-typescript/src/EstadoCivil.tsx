import React, {useReducer} from "react";


type Persona = {nombre: string, maritalStatus: 'soltero'|'casado'}
type Action = {type: 'soltero'} | {type : 'casado'}

const personaReducer = (state: Persona, action: Action): Persona =>
{
    switch(action.type){
        case 'casado':
            return {...state, maritalStatus:'casado'};
            
        case 'soltero':
            return {...state, maritalStatus:'soltero'};
        default:
            return state;        
       
    }
}


const EstadoCivil: React.FC = ()=> {
    const [persona, dispatch] = useReducer(personaReducer, {nombre:"Edwin", maritalStatus:"soltero"});
   const {maritalStatus} = persona;
    return(
        <div>
             <div>
            <h1>Digite su nombre</h1>
            <form>
                
            <h1>{maritalStatus}</h1>
           
            <button onClick={() => dispatch({type:'soltero'})}>Soltero</button>
            <button onClick={() => dispatch({type:'casado'})}>Casado</button>
            
            </form>
        </div>

        </div>
    )
}

export default EstadoCivil;