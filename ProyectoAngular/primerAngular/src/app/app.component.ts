import { Component, OnInit } from '@angular/core';


import { Cursos } from './models/cursos';
// import importa librerias o clases
import {HttpClient, HttpHeaders}from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnInit {
  //Atributos
  title = 'primerAngular';

 // arregloDatos: Cursos[] = [
 //   {id:"1", nombre : "html5", descripcion: "111", tiempo: "1", usuario:"Edwin"},
  //  {id:"2", nombre : "css3", descripcion: "222", tiempo: "222", usuario:"Edwin 2"},
  //  {id:"3", nombre : "js", descripcion: "333", tiempo: "333", usuario:"Edwin 3"},
 //   {id:"4", nombre : "jquery", descripcion: "444", tiempo: "444", usuario:"Edwin 4"},
   // {id:"5", nombre : "bootstrap", descripcion: "555", tiempo: "555", usuario:"Edwin 5"}

 // ]
  arregloDatos: Cursos[] = [];

constructor(private http: HttpClient){}

ngOnInit(): void {

  this.obtenerDatos();

}

obtenerDatos(){
  const url = "https://paginas-web-cr.com/ApiPHP/apis/ListaCurso.php";
  
this.http.get<Cursos[]>(url).subscribe(
  (response) => {
    console.log(response);

  }, 
  (error) => {
    console.error('Error en la carga de datos', error);
  }
)
  
}
}


