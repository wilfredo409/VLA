import { Component, OnInit } from '@angular/core';
import { Cursos } from '../models/cursos';
// import importa librerias o clases
import {HttpClient, HttpHeaders}from '@angular/common/http';
import { Respuestacursos } from '../models/respuestacursos';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  //Atributos
  title = 'primerAngular';
  textoboton = "Guardar";
  selectedCursos: Cursos = new Cursos();
  selectedCurso: Cursos ={
    id: '',
    nombre: '',
    descripcion: '',
    tiempo: '',
    usuario: '',
  };

  modeloCurso: Cursos = new Cursos();


  addAndEdit(){
    this.modeloCurso.usuario = 'Edwin Ceron';
    if (this.modeloCurso.id == ""){
      this.enviarSolicitudPost()
    }else{
    this.enviarSolicitudPostEditar();
  }
  }
  eliminar(item: Cursos){
    this.modeloCurso = item;
    
    this.enviarSolicitudPostEliminar();
    
    }
  limpiar(){
    this.modeloCurso = new Cursos();
    this.textoboton = 'Guardar';
    
  }

cargaredicion(item: Cursos){
  this.textoboton = "Modificar";
  this.modeloCurso = item;
  console.log(item);
  
}


  


 // arregloDatos: Cursos[] = [
 //   {id:"1", nombre : "html5", descripcion: "111", tiempo: "1", usuario:"Edwin"},
  //  {id:"2", nombre : "css3", descripcion: "222", tiempo: "222", usuario:"Edwin 2"},
  //  {id:"3", nombre : "js", descripcion: "333", tiempo: "333", usuario:"Edwin 3"},
 //   {id:"4", nombre : "jquery", descripcion: "444", tiempo: "444", usuario:"Edwin 4"},
   // {id:"5", nombre : "bootstrap", descripcion: "555", tiempo: "555", usuario:"Edwin 5"}

 // ]
  arregloDatos: Cursos[] = [];

constructor(private http: HttpClient){}
obtenerDatos(){
  const url = "https://paginas-web-cr.com/ApiPHP/apis/ListaCurso.php";

  /*


  */


  
this.http.get<Respuestacursos>(url).subscribe(
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

enviarSolicitudPostEditar(){

  const url = "https://paginas-web-cr.com/ApiPHP/apis/ActualizarCursos.php";
//Datyos que deseas enviar en la solicitud post
const data = {
  parametro1: 'valor1',
  parametro2: 'valor2'
  // Agrega mas datos segun tus necesidades
};

const headers = new HttpHeaders({
  'Content-Type': 'aplication/json' //Ajusta el tipo de contenido segun requerimientos
});

//Realiza la solicitud POST
this.http.post(url, this.modeloCurso, {headers}).subscribe(
  (response) => {
    //Maneja respuesta de la API
    console.log('Respuesta de la API: ', response);
    this.obtenerDatos();
  }, 
  (error) => {
    console.error('Error en la carga de datos', error);
  }
  
);

this.textoboton = 'Guardar';
this.modeloCurso = new Cursos();
}



enviarSolicitudPostEliminar(){
  const url = "https://paginas-web-cr.com/ApiPHP/apis/BorrarCursos.php";
//Datyos que deseas enviar en la solicitud post
const data = {
  id: this.modeloCurso.id,
};

const headers = new HttpHeaders({
  'Content-Type': 'aplication/json' //Ajusta el tipo de contenido segun requerimientos
});

//Realiza la solicitud POST
this.http.post(url, data, {headers}).subscribe(
  (response) => {
    //Maneja respuesta de la API
    console.log('Respuesta de la API: ', response);
    this.obtenerDatos();
  }, 
  (error) => {
    console.error('Error en la carga de datos', error);
  }
  
);



}



enviarSolicitudPost(){
  const url = "https://paginas-web-cr.com/ApiPHP/apis/InsertarCursos.php";
//Datyos que deseas enviar en la solicitud post
const data = {
  parametro1: 'valor1',
  parametro2: 'valor2'
  // Agrega mas datos segun tus necesidades
};

const headers = new HttpHeaders({
  'Content-Type': 'aplication/json' //Ajusta el tipo de contenido segun requerimientos
});

//Realiza la solicitud POST
this.http.post(url, this.modeloCurso, {headers}).subscribe(
  (response) => {
    //Maneja respuesta de la API
    console.log('Respuesta de la API: ', response);
    this.obtenerDatos();
  }, 
  (error) => {
    console.error('Error en la carga de datos', error);
  }
  
);



}

}
