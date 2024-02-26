import React, {useState} from "react";
import { Button, Modal } from "react-bootstrap";
import {Form, FormControl} from 'react-bootstrap';
import Persona from "./models/persona";

interface PersonaContrato{
    persona : Persona;
}

const ModalSiguiente : React.FC = () => {
    const totalSecciones = 3;
    const[seccionActual, setSeccionActual] = useState(0);
    const [mostrarModal, setMostrarModal] = useState(false);
    const [persona, setPersona] = useState <Persona> ({
        nombre:"",
        apellido1:"",
        apellido2:"",
        edad:0
    });

    const cerrarModal=() =>{
        
        console.log(persona);
        setSeccionActual(0);
        setMostrarModal(false);
    }

    const abrirModal = () => {
        setSeccionActual(1);
        setMostrarModal(true);
    }
    const avanzarSeccionSiguiente = () =>{
        if(seccionActual < totalSecciones){
            setSeccionActual(seccionActual +1)
        }
    }

    const regresarSeccion = () => {
        if(seccionActual <= totalSecciones){
            setSeccionActual(seccionActual -1)
        }
    }

    const manejadorInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;

        setPersona((prevPersona)=>({
            ...prevPersona,
            [name]:value,
        }));
    }
    
    return(
        <div>
            <Button onClick={abrirModal}>Abrir Modal</Button>
            <Modal show={seccionActual>0} onHide={cerrarModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Seccion {seccionActual}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {seccionActual === 1 &&(
                    <FormControl 
                    name = "nombre"
                    value ={persona?.nombre}
                    onChange={manejadorInputChange}
                    placeholder="Colocar el Nombre"></FormControl>)}
                    {seccionActual === 2 &&(
                    <div>
                        <FormControl 
                         name = "apellido1"
                         value ={persona?.apellido1}
                         onChange={manejadorInputChange}
                        placeholder="Colocar el apellido 1"></FormControl>
                                            
                        <FormControl 
                         name = "apellido2"
                         value ={persona?.apellido2}
                         onChange={manejadorInputChange}
                        placeholder="Colocar el apellido 2"></FormControl></div>)}
                    {seccionActual === 3 &&(
                    <FormControl 
                    name = "edad"
                    value ={persona?.edad}
                    onChange={manejadorInputChange}
                    placeholder="Colocar la edad"></FormControl>)}
                </Modal.Body>
                <Modal.Footer>
                {seccionActual < totalSecciones &&(<Button variant="primary" onClick={avanzarSeccionSiguiente}>Siguiente</Button>)}
                {seccionActual > 1 &&(<Button variant="warning" onClick={regresarSeccion}>Regresar</Button>)}
                {seccionActual === totalSecciones &&(<Button variant="success" onClick={cerrarModal}>Finalizar</Button>)}
                </Modal.Footer>
            </Modal>

        </div>
    );
}

export default ModalSiguiente;