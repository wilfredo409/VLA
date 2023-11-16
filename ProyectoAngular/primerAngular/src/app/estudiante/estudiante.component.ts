
import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../models/estudiante';
// import importa librerias o clases
import {HttpClient, HttpHeaders}from '@angular/common/http';
import { Respuestaestudiante } from '../models/respuestaestudiante';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {
  //Atributos

  
  botoneditar = 'Guardar';





  selectedEstudiantes: Estudiante = new Estudiante();
  selectedEstudiante: Estudiante ={
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


  modeloEstudiante: Estudiante = new Estudiante();

  addAndEditGrupo(){
    
    if (this.modeloEstudiante.id == ""){
      this.enviarSolicitudPostEstudiante()
    }else{
      this.enviarSolicitudPostEstudianteEditar();
  }

    
    
  }

  cargaredicion(item: Estudiante){
    this.botoneditar = "Modificar";
    this.modeloEstudiante = item;
    console.log(item);
    
  }

  limpiar(){
    this.modeloEstudiante = new Estudiante();
    this.botoneditar = 'Guardar';
    
  }

  eliminar(item: Estudiante){
    this.modeloEstudiante = item;
    
    this.enviarSolicitudPostEliminar();
    
    }



 // arregloDatos: Cursos[] = [
 //   {id:"1", nombre : "html5", descripcion: "111", tiempo: "1", usuario:"Edwin"},
  //  {id:"2", nombre : "css3", descripcion: "222", tiempo: "222", usuario:"Edwin 2"},
  //  {id:"3", nombre : "js", descripcion: "333", tiempo: "333", usuario:"Edwin 3"},
 //   {id:"4", nombre : "jquery", descripcion: "444", tiempo: "444", usuario:"Edwin 4"},
   // {id:"5", nombre : "bootstrap", descripcion: "555", tiempo: "555", usuario:"Edwin 5"}

 // ]
  arregloDatos: Estudiante[] = [];

constructor(private http: HttpClient, titulo: Title){
  titulo.setTitle('Estudiante');
}
obtenerDatos(){
  const url = "https://paginas-web-cr.com/ApiPHP/apis/ListaEstudiantes.php";
   
  
  
  

  /*


  */


  
this.http.get<Respuestaestudiante>(url).subscribe(
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

enviarSolicitudPostEstudianteEditar(){

  const url = "https://paginas-web-cr.com/ApiPHP/apis/ActualizarEstudiantes.php";
  //Datyos que deseas enviar en la solicitud post
  const data = {
    parametro1: 'valor1',
   
    // Agrega mas datos segun tus necesidades
  };
  
  const headers = new HttpHeaders({
    'Content-Type': 'aplication/json' //Ajusta el tipo de contenido segun requerimientos
  });
  
  //Realiza la solicitud POST
  this.http.post(url, this.modeloEstudiante, {headers}).subscribe(
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
this.botoneditar = 'Guardar';
  this.modeloEstudiante = new Estudiante(); 
  
}


enviarSolicitudPostEliminar(){

  const url = "https://paginas-web-cr.com/ApiPHP/apis/BorrarEstudiantes.php";
  //Datyos que deseas enviar en la solicitud post
  const data = {
    id: this.modeloEstudiante.id,
   
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
  this.botoneditar = 'Guardar';
  this.modeloEstudiante = new Estudiante(); 
}

enviarSolicitudPostEstudiante(){
  const url = "https://paginas-web-cr.com/ApiPHP/apis/InsertarEstudiantes.php";
//Datyos que deseas enviar en la solicitud post
const data = {
  parametro1: 'valor1',
 
  // Agrega mas datos segun tus necesidades
};

const headers = new HttpHeaders({
  'Content-Type': 'aplication/json' //Ajusta el tipo de contenido segun requerimientos
});

//Realiza la solicitud POST
this.http.post(url, this.modeloEstudiante, {headers}).subscribe(
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
