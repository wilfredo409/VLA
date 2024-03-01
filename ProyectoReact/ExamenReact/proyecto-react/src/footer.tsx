import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Container, Carousel } from 'react-bootstrap';

const Footer: React.FC = () => {

    return(
      <Container className="mt-5 bg-dark hi1">
      <h2 className="mb-4">Tecnologías utilizadas en el desarrollo de esta web</h2>
      <Carousel>
        <Carousel.Item>
          <img
            src=" https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
            alt="React"
            style={{ width: '300px', height: '200px' }}
          />
          <Carousel.Caption>
            <h3>React</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://angular.io/assets/images/logos/angular/angular.svg"
            alt="Angular"
            style={{ width: '300px', height: '200px' }}
          />
          <Carousel.Caption>
            <h3>Angular</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src="https://vuejs.org/images/logo.png"
            alt="Vue"
            style={{ width: '300px', height: '200px' }}
          />
          <Carousel.Caption>
            <h3>Vue</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png"
            alt="Node.js"
            style={{ width: '300px', height: '200px' }}
          />
          <Carousel.Caption>
            <h3>Node.js</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src="https://www.python.org/static/community_logos/python-logo.png"
            alt="Python"
            style={{ width: '300px', height: '200px' }}
          />
          <Carousel.Caption>
            <h3>Python</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Ruby_on_Rails-logo.png/1280px-Ruby_on_Rails-logo.png"
            alt="Ruby And Rails"
            style={{ width: '300px', height: '200px' }}
          />
          <Carousel.Caption>
            <h3>Ruby And Rails</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src="https://laravel.com/img/logotype.min.svg"
            alt="Laravel"
            style={{ width: '300px', height: '200px' }}
          />
          <Carousel.Caption>
            <h3>Laravel</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Django_logo.svg/1200px-Django_logo.svg.png"
            alt="Django"
            style={{ width: '300px', height: '200px' }}
          />
          <Carousel.Caption>
            <h3>Django</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src="https://expressjs.com/images/express-facebook-share.png"
            alt="Express.js"
            style={{ width: '300px', height: '200px' }}
          />
          <Carousel.Caption>
            <h3>Express.js</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/250px-Microsoft_logo_%282012%29.svg.png"
            alt="ASP.net"
            style={{ width: '500px', height: '200px' }}
          />
          <Carousel.Caption>
            <h3>ASP.net</h3>
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
    </Container>
    )
} 

export default Footer;