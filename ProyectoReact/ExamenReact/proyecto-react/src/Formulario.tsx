import React, { useState, useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './App.css';

const Formulario: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [codigoPais, setCodigoPais] = useState('');
  const [telefono, setTelefono] = useState('');
  const [comentario, setComentario] = useState('');
  const [paises, setPaises] = useState([]);
  const [error, setError] = useState('');
  const [envio, setEnvio] = useState('');
var estado ="";

  if((50 - comentario.length)==0)
     estado ="Rojo";
  
  


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        const sortedCountries = data.sort((a: any, b: any) => a.name.common.localeCompare(b.name.common));
        setPaises(sortedCountries);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };



    fetchData();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!nombre || !correo || !codigoPais || !telefono || !comentario) {
      setError('Todos los campos son obligatorios');
      setEnvio('');
    } else {
      // Lógica para enviar el formulario
      setEnvio('Los Datos se enviaron correctamente' );
      console.log('Formulario enviado:', { nombre, correo, codigoPais, telefono, comentario });
      // Limpia los campos después de enviar el formulario
      setNombre('');
      setCorreo('');
      setCodigoPais('');
      setTelefono('');
      setComentario('');
      setError('');
    }
  };

  return (
    <Container>
      <h1>Formulario</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formNombre">
          <Form.Label>Nombre completo</Form.Label>
          <Form.Control type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCorreo">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formTelefono">
          <Form.Label>Teléfono</Form.Label>
          <div className="input-group">
          <select className="form-select" value={codigoPais} onChange={(e) => setCodigoPais(e.target.value)}>
              <option value="">Código de país</option>
              {paises.map((pais: any) => (
                <option key={pais.cca2} value={pais.cca2}>
                  {pais.name.common}
                </option>
              ))}
            </select>
            <Form.Control type="number" maxLength={8} className="me-2" value={telefono} onChange={(e) => setTelefono(e.target.value.replace(/\D/, ''))} />
            
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formComentario">
          <Form.Label>Comentario</Form.Label>
          <Form.Control as="textarea" rows={3} value={comentario} maxLength={50} onChange={(e) => setComentario(e.target.value)} />
          <Form.Label className={estado}>{50 - comentario.length} caracteres restantes</Form.Label>
        </Form.Group>

        {error && <div className="alert alert-danger">{error}</div>}
                <h1 className="Verde">{envio}</h1>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
  );
};

export default Formulario;

