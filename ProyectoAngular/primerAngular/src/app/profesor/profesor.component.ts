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


}

