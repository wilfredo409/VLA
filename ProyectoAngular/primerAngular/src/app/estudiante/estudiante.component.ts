
import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../models/estudiante';
// import importa librerias o clases
import {HttpClient, HttpHeaders}from '@angular/common/http';
import { Respuestaestudiante } from '../models/respuestaestudiante';


@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {
  //Atributos
  title = 'primerAngular';

 // arregloDatos: Cursos[] = [
 //   {id:"1", nombre : "html5", descripcion: "111", tiempo: "1", usuario:"Edwin"},
  //  {id:"2", nombre : "css3", descripcion: "222", tiempo: "222", usuario:"Edwin 2"},
  //  {id:"3", nombre : "js", descripcion: "333", tiempo: "333", usuario:"Edwin 3"},
 //   {id:"4", nombre : "jquery", descripcion: "444", tiempo: "444", usuario:"Edwin 4"},
   // {id:"5", nombre : "bootstrap", descripcion: "555", tiempo: "555", usuario:"Edwin 5"}

 // ]
  arregloDatos: Estudiante[] = [];

constructor(private http: HttpClient){}
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


}
