import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Beneficios: React.FC = () => {
  return (
    <Container className="mt-5">
      <h1 className="mb-4">Beneficios de nuestra empresa de cuidado de adultos mayores</h1>
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Atención personalizada</Card.Title>
              <Card.Text>
                Brindamos una atención personalizada y adaptada a las necesidades individuales de cada adulto mayor.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Personal capacitado</Card.Title>
              <Card.Text>
                Contamos con un equipo de profesionales altamente capacitados y con experiencia en el cuidado de personas mayores.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Actividades recreativas</Card.Title>
              <Card.Text>
                Organizamos actividades recreativas y sociales para promover el bienestar emocional y físico de nuestros residentes.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Instalaciones cómodas y seguras</Card.Title>
              <Card.Text>
                Nuestras instalaciones están diseñadas pensando en la comodidad y seguridad de nuestros residentes, con espacios adaptados y accesibles.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Servicios médicos especializados</Card.Title>
              <Card.Text>
                Ofrecemos servicios médicos especializados y atención médica continua para garantizar el bienestar y la salud de nuestros residentes.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Beneficios;
