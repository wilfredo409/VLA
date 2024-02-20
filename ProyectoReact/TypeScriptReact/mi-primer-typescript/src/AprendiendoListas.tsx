import React, {useState} from "react";

interface Tarea{
    id: number;
    texto: string;
}
const AprendiendoListas: React.FC = () =>{
    const [tareas, setTareas] = useState<Tarea[]>([]);
    const [nuevaTarea, setNuevaTarea] = useState<string>('');
    const agregarTarea = () =>{
        const insertandoNuevaTarea : Tarea ={
            id: Date.now(),
            texto: nuevaTarea,
        }
        setTareas([...tareas, insertandoNuevaTarea]);
        setNuevaTarea('');
    }

    const EliminarTarea = (id:number) => {
        const nuevoVectorTarea = tareas.filter((t) => t.id !== id);
        setTareas(nuevoVectorTarea);
    }

    return(
        <div>
            <h1>Lista de Tarea</h1>
            <table>
                <tr>
                    <th> Correlativo</th>
                    <th>Tarea</th>
                    <th>Accion</th>
                </tr>
                
                {tareas.map((tarea)=>(
                    <tr>
                    <td key={tarea.id}>{tarea.id}</td>
                       <td> {tarea.texto}</td>
                      <td>  <button onClick={()=> EliminarTarea(tarea.id)}>Eliminar</button>
                    </td>
                    </tr>
                ))}
                
            </table>
            <label>Nueva Tarea: 
                <input type="text"
                value={nuevaTarea}
                onChange={(e) => setNuevaTarea(e.target.value)}
                ></input>
            </label>
            <button onClick={agregarTarea}>Agregar Tarea</button>
        </div>
    )
}

export default AprendiendoListas;

// Crear un componente con un boton de incrementar y otro de decrementar