import React, { useEffect, useState } from "react";
import axios from "axios";

const ListaPaises = () => {

    const [paises, setPaises] = useState<any[]>([]);

    useEffect(()=>{
        const obtenerApiPaises = async() => {
            try{
                const respuesta = await axios.get("https://restcountries.com/v3.1/all");
                const paisesOrdenados = respuesta.data.sort((a:any,b:any) =>{
                    const paisA = a.name.common.toUpperCase();
                    const paisB = b.name.common.toUpperCase();

                    if (paisA < paisB)
                    return -1;
                    if (paisA > paisB)
                    return 1;
                });
                
                setPaises(paisesOrdenados);
            }   
            catch(error){

                console.log("Hubo un error", error);

            }
        }
        obtenerApiPaises();
    }, []);
    return (
        <div>
            <h1>Consumiendo un api en React</h1>

            <div className="mb-3">
                <label className="form-label">Pais</label>
                <select
                    className="form-select form-select-lg"
                    name=""
                    id=""
                >
                     {
                    paises.map((pais) =>(
                        <option key={pais.cca2}>
                            {pais.name.common}
                        </option>
                    ))
                }
                </select>
            </div>
            


            
        </div>
    )
}

export default ListaPaises;
