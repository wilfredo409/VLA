import React from "react";
import { Button, Form, Table } from "react-bootstrap";
import './General.css'
const Formulario1 : React.FC = () =>{
    return (
        <div>
            <h1> Estas son las etiquetas ahora con React bootsrap</h1>
            <Form.Label>Hola Mundo este es un Label</Form.Label>
            <Form.Control placeholder="Esto es un input"></Form.Control>
            <Form.Label>Esto es un select</Form.Label>
            <Form.Select>
                <option value="1">SQL</option>
                <option value="2">FrontEnd</option>
                <option value="3">Python </option>
            </Form.Select>
            <Form.Label>Esto es un checkbox</Form.Label>
            <Form.Check type="checkbox" label="Vio terminos y condiciones"></Form.Check>
            <Form.Check type="checkbox" label="Es mayor de edad">
            <Table>
                <thead>
                    <th>Id Persona</th>
                    <th>Nombre Completo</th>
                </thead>
                <tbody>
                    <tr>
                        <td>12345</td>
                        <td>Edwin Ceron</td>
                    </tr>
                    <tr>
                        <td>56485</td>
                        <td>Edwin Mateo</td>
                    </tr>
                </tbody>
            </Table>
            <Form.Label className="colorEtiquetado">Esto es una tabla</Form.Label>
            <br></br>
            <Button variant="primary">Aceptar</Button>
            <Button variant="success">Aceptar</Button>
            <Button variant="warning">Aceptar</Button>
            <Button className="btn btn-danger">Aceptar</Button>
            </Form.Check>
        </div>
    )
}

export default Formulario1;