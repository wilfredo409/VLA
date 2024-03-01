import React from "react";
import './App.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Home: React.FC = () =>{

    return(
        <div className="container-fluid center">
            <h1>BIENVENIDOS A INNOVA<i className="tituloc">CARE</i></h1>
            <Container className="mt-5">
      <Row className="justify-content-center ">
        <Col md={8}>
          <Card>
            <Card.Body className="bg-dark hi1">
              
              <Card.Text className="bg-dark hi1">
                En nuestra empresa de cuidado de adultos mayores a domicilio, nos dedicamos a proporcionar un cuidado excepcional y compasivo para nuestros clientes en la comodidad de sus hogares. Reconocemos la importancia de mantener la independencia y la familiaridad del entorno para la calidad de vida de nuestros clientes mayores.

                Nuestro equipo de cuidadores altamente calificados y compasivos se esfuerza por brindar un apoyo personalizado y atento a cada individuo. Nos enfocamos en comprender las necesidades únicas de cada cliente y adaptar nuestros servicios para satisfacerlas de manera integral.

                Ofrecemos una amplia gama de servicios que incluyen asistencia con actividades diarias, como bañarse, vestirse y preparar comidas, así como acompañamiento a citas médicas, recordatorios de medicamentos y compañía en general. Nos aseguramos de que nuestros clientes reciban la atención y el cuidado que merecen mientras continúan viviendo en la comodidad y la seguridad de su propio hogar.

                En nuestra empresa, nos comprometemos a establecer relaciones de confianza y respeto con nuestros clientes y sus familias. Nos esforzamos por ser un recurso confiable y un apoyo constante para aquellos que confían en nosotros para el cuidado de sus seres queridos mayores.

                Con un enfoque centrado en la dignidad, el bienestar y la calidad de vida de nuestros clientes, nuestra empresa de cuidado de adultos mayores a domicilio se compromete a proporcionar un servicio excepcional que brinde tranquilidad y comodidad a las personas mayores y sus familias.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
        </div>
    )
}

export default Home;