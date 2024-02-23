import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Modal, Button } from "react-bootstrap";
import Formulario1 from "./Formulario1";

const ModalSaludando : React.FC = () =>
{
    const [isOpen, setIsOpen] = useState(false);
   const closeModal = () =>{
    setIsOpen(false);
}

const openModal = () =>{
    setIsOpen(true);
}

    return(
        <div>
            <Button variant="success"  onClick={openModal}>Abrir Modal</Button>
          
           <Modal show={isOpen} onHide={closeModal}>
            <Modal.Header>
                <Modal.Title>Mi primer titulo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Formulario1></Formulario1>
                <p>Este es mi primer contenido utilizando un modal de bootstrap</p>
            </Modal.Body>
            <Modal.Footer>
           
               <button className="btn btn-primary" onClick={closeModal}>Guardar</button>
               <button className="btn btn-danger" onClick={closeModal}>Cancelar</button>
                            
            </Modal.Footer>
           </Modal>
            
        </div>
    );
}
export default ModalSaludando