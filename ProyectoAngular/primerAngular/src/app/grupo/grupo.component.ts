import { Component, OnInit } from '@angular/core';



import { grupo } from '../models/grupo';
// import importa librerias o clases
import {HttpClient, HttpHeaders}from '@angular/common/http';
import { Respuestagrupo } from '../models/respuestagrupo';
@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.css']
})
export class GrupoComponent  implements OnInit {
  //Atributos
  title = 'primerAngular';
  botoneditar = 'Guardar';

  selectedGrupos: grupo = new grupo();
  selectedGrupo: grupo ={
    id: '',
    nombre: '',
    
  };


  modeloGrupo: grupo = new grupo();

  addAndEditGrupo(){
    
    if (this.modeloGrupo.id == ""){
      this.enviarSolicitudPostGrupo()
    }else{
      this.enviarSolicitudPostGrupoEditar();
  }

    
    
  }

  cargaredicion(item: grupo){
    this.botoneditar = "Modificar";
    this.modeloGrupo = item;
    console.log(item);
    
  }

  limpiar(){
    this.modeloGrupo = new grupo();
    this.botoneditar = 'Guardar';
    
  }

  eliminar(item: grupo){
    this.modeloGrupo = item;
    
    this.enviarSolicitudPostEliminar();
    
    }

 // arregloDatos: Cursos[] = [
 //   {id:"1", nombre : "html5", descripcion: "111", tiempo: "1", usuario:"Edwin"},
  //  {id:"2", nombre : "css3", descripcion: "222", tiempo: "222", usuario:"Edwin 2"},
  //  {id:"3", nombre : "js", descripcion: "333", tiempo: "333", usuario:"Edwin 3"},
 //   {id:"4", nombre : "jquery", descripcion: "444", tiempo: "444", usuario:"Edwin 4"},
   // {id:"5", nombre : "bootstrap", descripcion: "555", tiempo: "555", usuario:"Edwin 5"}

 // ]
  arregloDatos2: grupo[] = [];

constructor(private http: HttpClient){}
obtenerDatosGrupo(){
  const url = "https://paginas-web-cr.com/ApiPHP/apis/ListaGrupo.php";

  /*


  */


  
this.http.get<Respuestagrupo>(url).subscribe(
  (response) => {
    this.arregloDatos2 = response.data;
    console.log(response.data);

  }, 
  (error) => {
    console.error('Error en la carga de datos', error);
  }
)
  
}

ngOnInit(): void {

  this.obtenerDatosGrupo();

}

enviarSolicitudPostGrupoEditar(){

  const url = "https://paginas-web-cr.com/ApiPHP/apis/ActualizarGrupo.php";
  //Datyos que deseas enviar en la solicitud post
  const data = {
    parametro1: 'valor1',
   
    // Agrega mas datos segun tus necesidades
  };
  
  const headers = new HttpHeaders({
    'Content-Type': 'aplication/json' //Ajusta el tipo de contenido segun requerimientos
  });
  
  //Realiza la solicitud POST
  this.http.post(url, this.modeloGrupo, {headers}).subscribe(
    (response) => {
      //Maneja respuesta de la API
      console.log('Respuesta de la API: ', response, );
     
      this.obtenerDatosGrupo();
      this.limpiar();
    }, 
    (error) => {
      console.error('Error en la carga de datos', error);
    }
    
  );
this.botoneditar = 'Guardar';
  this.modeloGrupo = new grupo();
  
}


enviarSolicitudPostEliminar(){

  const url = "https://paginas-web-cr.com/ApiPHP/apis/BorrarGrupo.php";
  //Datyos que deseas enviar en la solicitud post
  const data = {
    id: this.modeloGrupo.id,
   
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
     
      this.obtenerDatosGrupo();
      this.limpiar();
    }, 
    (error) => {
      console.error('Error en la carga de datos', error);
    }
    
  );

}

enviarSolicitudPostGrupo(){
  const url = "https://paginas-web-cr.com/ApiPHP/apis/InsertarGrupo.php";
//Datyos que deseas enviar en la solicitud post
const data = {
  parametro1: 'valor1',
 
  // Agrega mas datos segun tus necesidades
};

const headers = new HttpHeaders({
  'Content-Type': 'aplication/json' //Ajusta el tipo de contenido segun requerimientos
});

//Realiza la solicitud POST
this.http.post(url, this.modeloGrupo, {headers}).subscribe(
  (response) => {
    //Maneja respuesta de la API
    console.log('Respuesta de la API: ', response, );
   
    this.obtenerDatosGrupo();
    this.limpiar();
  }, 
  (error) => {
    console.error('Error en la carga de datos', error);
  }
  
);



}


}
