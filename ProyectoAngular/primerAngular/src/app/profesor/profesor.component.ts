import { Component, OnInit } from '@angular/core';
import { Profesor } from '../models/profesor';
// import importa librerias o clases
import {HttpClient, HttpHeaders}from '@angular/common/http';
import { Respuestaprofesor } from '../models/respuestaprofesor';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent implements OnInit {
  //Atributos
  title = 'primerAngular';
  botoneditar = 'Guardar';

  selectedProfesores: Profesor = new Profesor();
  selectedProfesor: Profesor ={
    id: '',
    cedula:'',
    correoelectronico: '',
    telefono: '',
        telefonocelular: '',
        fechanacimiento: '',
        sexo: '',
        direccion: '',
        nombre: '',
        apellidopaterno: '',
        apellidomaterno: '',
        nacionalidad: '',
        idCarreras: '',
        usuario: '',
  };


  modeloProfesor: Profesor = new Profesor();

  addAndEditGrupo(){
    
    if (this.modeloProfesor.id == ""){
      this.enviarSolicitudPostProfesor();
    }else{
      this.enviarSolicitudPostProfesorEditar();
  }

    
    
  }

  cargaredicion(item: Profesor){
    this.botoneditar = "Modificar";
    this.modeloProfesor = item;
    console.log(item);
    
  }

  limpiar(){
    this.modeloProfesor = new Profesor();
    this.botoneditar = 'Guardar';
    
  }

  eliminar(item: Profesor){
    this.modeloProfesor = item;
    
    this.enviarSolicitudPostEliminar();
    
    }



 // arregloDatos: Cursos[] = [
 //   {id:"1", nombre : "html5", descripcion: "111", tiempo: "1", usuario:"Edwin"},
  //  {id:"2", nombre : "css3", descripcion: "222", tiempo: "222", usuario:"Edwin 2"},
  //  {id:"3", nombre : "js", descripcion: "333", tiempo: "333", usuario:"Edwin 3"},
 //   {id:"4", nombre : "jquery", descripcion: "444", tiempo: "444", usuario:"Edwin 4"},
   // {id:"5", nombre : "bootstrap", descripcion: "555", tiempo: "555", usuario:"Edwin 5"}

 // ]
  arregloDatos: Profesor[] = [];

constructor(private http: HttpClient){}
obtenerDatos(){
  const url = "https://paginas-web-cr.com/ApiPHP/apis/ListaProfesores.php";

  /*


  */


  
this.http.get<Respuestaprofesor>(url).subscribe(
  (response) => {
    this.arregloDatos = response.data;
    console.log(response.data);

  }, 
  (error) => {
    console.error('Error en la carga de datos', error);
  }
)
  
}

ngOnInit(): void {

  this.obtenerDatos();

}


enviarSolicitudPostProfesorEditar(){

  const url = "https://paginas-web-cr.com/ApiPHP/apis/ActualizarProfesores.php";
  //Datyos que deseas enviar en la solicitud post
  const data = {
    parametro1: 'valor1',
   
    // Agrega mas datos segun tus necesidades
  };
  
  const headers = new HttpHeaders({
    'Content-Type': 'aplication/json' //Ajusta el tipo de contenido segun requerimientos
  });
  
  //Realiza la solicitud POST
  this.http.post(url, this.modeloProfesor, {headers}).subscribe(
    (response) => {
      //Maneja respuesta de la API
      console.log('Respuesta de la API: ', response, );
     
      this.obtenerDatos();
      this.limpiar();
    }, 
    (error) => {
      console.error('Error en la carga de datos', error);
    }
    
  );

  
}


enviarSolicitudPostEliminar(){

  const url = "https://paginas-web-cr.com/ApiPHP/apis/BorrarProfesores.php";
  //Datyos que deseas enviar en la solicitud post
  const data = {
    id: this.modeloProfesor.id,
   
    // Agrega mas datos segun tus necesidades
  };
  
  const headers = new HttpHeaders({
    'Content-Type': 'aplication/json' //Ajusta el tipo de contenido segun requerimientos
  });
  
  //Realiza la solicitud POST
  this.http.post(url, data, {headers}).subscribe(
    (response) => {
      //Maneja respuesta de la API
      console.log('Respuesta de la API: ', response, );
     
      this.obtenerDatos();
      this.limpiar();
    }, 
    (error) => {
      console.error('Error en la carga de datos', error);
    }
    
  );
   
}

enviarSolicitudPostProfesor(){
  const url = "https://paginas-web-cr.com/ApiPHP/apis/InsertarProfesores.php";
//Datyos que deseas enviar en la solicitud post
const data = {
  parametro1: 'valor1',
 
  // Agrega mas datos segun tus necesidades
};

const headers = new HttpHeaders({
  'Content-Type': 'aplication/json' //Ajusta el tipo de contenido segun requerimientos
});

//Realiza la solicitud POST
this.http.post(url, this.modeloProfesor, {headers}).subscribe(
  (response) => {
    //Maneja respuesta de la API
    console.log('Respuesta de la API: ', response, );
   
    this.obtenerDatos();
    this.limpiar();
  }, 
  (error) => {
    console.error('Error en la carga de datos', error);
  }
  
);



}



}

