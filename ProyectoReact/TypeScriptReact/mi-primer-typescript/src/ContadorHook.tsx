import React, {useReducer} from "react";

type Action = {
    type: 'Increment'
} | {type : 'Decrement'}| {type : 'Incrementx10'}| {type : 'Decrementx10'}

const contadorReducer = (state: number, action:Action) : number =>{
    switch(action.type){
        case 'Increment':
            return state +1;
            
        case 'Decrement':
            return state -1;
        
        case 'Incrementx10':
                return state +10;
                
        case 'Decrementx10':
                return state -10;
        default:
            return state;
    }
}
const ContadorHooks : React.FC = () => {
    const [contador, dispatch] = useReducer(contadorReducer, 0);

    return(
        <div>
            <h1>Contador con Hooks</h1>
            <h1>Contador con Reducer: {contador}</h1>
            <button onClick={() => dispatch({type:'Increment'})}>Incrementar</button>
            <button onClick={() => dispatch({type:'Decrement'})}>Decrementar</button>
            <button onClick={() => dispatch({type:'Incrementx10'})}>Incrementar x10</button>
            <button onClick={() => dispatch({type:'Decrementx10'})}>Decrementar x10</button>
        
        </div>
    )
}
export default ContadorHooks;