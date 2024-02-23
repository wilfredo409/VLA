import React, {useState} from "react";
import { Button, Modal } from "react-bootstrap";

const ModalSiguiente : React.FC = () => {
    const totalSecciones = 3;
    const[seccionActual, setSeccionActual] = useState(0);
    const cerrarModal=() =>{
        setSeccionActual(0);
    }
    const avanzarSeccionSiguiente = () =>{
        if(seccionActual < totalSecciones){
            setSeccionActual(seccionActual +1)
        }
    }
    return(
        <div>
            <Button onClick={() =>setSeccionActual(1)}>Abrir Modal</Button>
            <Modal show={seccionActual>0} onHide={cerrarModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Seccion {seccionActual}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {seccionActual === 1 &&(<p>Estamos en el contenido 1</p>)}
                    {seccionActual === 2 &&(<p>Estamos en el contenido 2</p>)}
                    {seccionActual === 3 &&(<p>Estamos en el contenido 3</p>)}
                </Modal.Body>
                <Modal.Footer>
                {seccionActual < totalSecciones &&(<Button variant="primary" onClick={avanzarSeccionSiguiente}>Siguiente</Button>)}
                {seccionActual === totalSecciones &&(<Button variant="success" onClick={cerrarModal}>Finalizar</Button>)}
                </Modal.Footer>
            </Modal>

        </div>
    );
}

export default ModalSiguiente;