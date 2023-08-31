const newLocalGrupo = "https://paginas-web-cr.com/ApiPHP/apis/ListaGrupo.php";
var apiconsultarGrupo = newLocalGrupo;
var apieliminarGrupo = "https://paginas-web-cr.com/ApiPHP/apis/BorrarGrupo.php";
var apiInsertarGrupo = "https://paginas-web-cr.com/ApiPHP/apis/InsertarGrupo.php";
var apibaseGrupo = "https://paginas-web-cr.com/ApiPHP/apis/";
var apicrearGrupo = "ActualizarGrupo.php";


const myModalEliminarGrupo = new bootstrap.Modal(document.getElementById('myModalEliminarGrupo'));

const myModalEditarGrupo = new bootstrap.Modal(document.getElementById('myModalEditarGrupo'));

const myModalsuccessGrupo = new bootstrap.Modal(document.getElementById('myModalsuccessGrupo'));

const myModalCrearGrupo = new bootstrap.Modal(document.getElementById('myModalCrearGrupo'));


let tablaresultadoGrupo = document.querySelector('#tablaresultadoGrupo');
function consultardatosGrupo(){
    fetch(apiconsultarGrupo)
    .then(estructuraGrupo => estructuraGrupo.json())
    .then((datosrespuestaGrupo) => {
        //console.log(datosrespuesta)
        ajustardatostablaGrupo(datosrespuestaGrupo.data);
    })
    .catch(console.log);
}

function ajustardatostablaGrupo(datos3){
        
        for (const objetoindividual3 of datos3) {
          // console.log(objetoindividual.id);
           //console.log(objetoindividual.nombre);
           //console.log(objetoindividual.descripcion);
          // console.log(objetoindividual.tiempo);
          // console.log(objetoindividual.usuario);
           //console.log("////////");

           tablaresultadoGrupo.innerHTML += `
           
           <tr class="table-success text-align-center" >
           <td scope="row">${objetoindividual3.id}</td>
           <td>${objetoindividual3.nombre}</td>
           <td>
           <a name="Eliminar" id="Eliminar" class="btn-get-started"  role="button" data-bs-toggle="modal" data-bs-target="#myModalEliminarGrupo" onclick="mostrarModalGrupo('${objetoindividual3.id}')">Eliminar |</a>
           <a name="Editar" id="editar" class="btn-get-started"  role="button" data-bs-toggle="modal" data-bs-target="#myModalEditarGrupo" onclick="mostrarEditarModalGrupo('${objetoindividual3.id}','${objetoindividual3.nombre}')">| Editar</a>
           </td>
       </tr>`;
        }
}


consultardatosGrupo();

function mostrarModalGrupo(id3){
    
    document.getElementById('idEliminarGrupo').value = id3;
    myModalEliminarGrupo.show();
   
   
   
}

function mostrarEditarModalGrupo(id,nombre){
    
    document.getElementById('id3').value = id;
    document.getElementById('nombre3').value = nombre;
    

    myModalEditarGrupo.show();
   
    
    

}

function EditarGrupo(){
    
    
   var datosCursoGrupo = {
        "id" :document.getElementById('id3').value ,
        "nombre" :document.getElementById('nombre3').value 
        


   }
  var apiurlGrupo = apibaseGrupo + apicrearGrupo;

   fetch (apiurlGrupo, {
    method:'POST',
    body: JSON.stringify(datosCursoGrupo)
   })
   .then(estructura => estructura.json()).then((datosrespuestaGrupo) => {
        console.log(datosrespuestaGrupo);
        myModalEditarGrupo.hide();
        window.location.reload();
   }).catch(console.log);
}

function crearGrupo(){
myModalCrearGrupo.show();

}

function CrearNuevoGrupo(){
    var datosCrearGrupo = {
        "nombre" :document.getElementById('nombreGrupo').value ,
       


   }
   
   fetch (apiInsertarGrupo, {
    method:'POST',
    body: JSON.stringify(datosCrearGrupo)
   })
   .then(estructura => estructura.json())
   .then((datosrespuesta) => {
    myModalCrearGrupo.hide();
    window.location.reload();
   })
   .catch(console.log);

}


function eliminarGrupo(){
    var datosEliminarGrupo = {
        "id": document.getElementById('idEliminarGrupo').value
    }
    fetch(apieliminarGrupo, {
        method: 'POST',
        body: JSON.stringify(datosEliminarGrupo)
    })
    .then(estructura => estructura.json())
    .then((datosDeleteCurso) => {
        //console.log(datosrespuesta)
        myModalEliminarGrupo.hide();
        tablaresultadoGrupo.innerHTML = ``;
    window.location.reload();
    })
    .catch(console.log);
   

}