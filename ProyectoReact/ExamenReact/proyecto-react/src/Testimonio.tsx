import React from "react";
import './Testimonio.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

interface TestimonioProps{
    nombre: string
    edad: number
    cargo: string
    comentario: string
    calificacion: string
    fecha: string
    imagen: string
}
const Testimonio : React.FC<TestimonioProps> = (props) => {

    return(
        <div>
         
    
		<div className="valoracion">
			<div className="contenido-principal">
				<div className="imagen-testimonio">
          <img alt="Cliente" src={require(`./img/testimonials/${props.imagen}.jpg`)}/>
        </div>
				<div className="info">
					<h4>{props.nombre}</h4>
                    <h4>{props.edad} años</h4>
					<p>{props.cargo}</p>
				</div>
			</div>
			<div className="comentario-cliente">
				<p>{props.comentario}</p>
			</div>
			<div className="valoracion-footer">
				<div className="calificacion">
					<span className="active">{props.calificacion}</span> 
         
				</div>
				<p>{props.fecha}</p>
			</div>
		</div>
        </div>
    );

}


export default Testimonio;