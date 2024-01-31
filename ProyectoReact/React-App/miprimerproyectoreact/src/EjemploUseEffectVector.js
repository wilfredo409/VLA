import React, { useEffect, useState } from "react";

function EjemploUseEffectVector() { 

        const [vector, setVector] = useState([]);
        useEffect(()=>{
            const fetchData = async()=>
            {
                await new Promise(resolve => setTimeout(resolve, 10000));
                const newData = ["Edwin", "Niger", "Santiago", "German", "Patrio"];

                setVector(newData);
            }
            fetchData();
        }, []);
    return (

        <div>
            <h1>EjerciciouseEffect</h1>
            <ul>
                {vector.map((elemento, index) =>(
                    <li key={index}>{elemento}</li>
                ))}
            </ul>
        </div>
    );
 }

 export default EjemploUseEffectVector;