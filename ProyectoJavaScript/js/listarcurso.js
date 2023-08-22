

const newLocal = "https://paginas-web-cr.com/ApiPHP/apis/ListaCurso.php";
var apiconsultar = newLocal
var apieliminar = "https://paginas-web-cr.com/ApiPHP/apis/BorrarCursos.php";
var apibase = "https://paginas-web-cr.com/ApiPHP/apis/";
var apicrear = "ActualizarCursos.php";


const myModalEliminar = new bootstrap.Modal(document.getElementById('myModalEliminar'));

const myModalEditar = new bootstrap.Modal(document.getElementById('myModalEditar'));

const myModalsuccess = new bootstrap.Modal(document.getElementById('myModalsuccess'));


let tablaresultado = document.querySelector('#tablaresultado');
function consultardatos(){
    fetch(apiconsultar)
    .then(estructura => estructura.json())
    .then((datosrespuesta) => {
        //console.log(datosrespuesta)
        ajustardatostabla(datosrespuesta.data);
    })
    .catch(console.log);
}

function ajustardatostabla(datos2){
        
        for (const objetoindividual of datos2) {
          // console.log(objetoindividual.id);
           //console.log(objetoindividual.nombre);
           //console.log(objetoindividual.descripcion);
          // console.log(objetoindividual.tiempo);
          // console.log(objetoindividual.usuario);
           //console.log("////////");

           tablaresultado.innerHTML += `
           
           <tr class="table-primary" >
           <td scope="row">${objetoindividual.id}</td>
           <td>${objetoindividual.nombre}</td>
           <td>${objetoindividual.descripcion}</td>
           <td>${objetoindividual.tiempo}</td>
           <td>${objetoindividual.usuario}</td>
           <td>
           <a name="Eliminar" id="Eliminar" class="btn btn-danger"  role="button" data-bs-toggle="modal" data-bs-target="#myModalEliminar" onclick="mostrarModal('${objetoindividual.id}')">Eliminar</a>
           <a name="Editar" id="editar" class="btn btn-primary"  role="button" data-bs-toggle="modal" data-bs-target="#myModalEditar" onclick="mostrarEditarModal('${objetoindividual.id}','${objetoindividual.nombre}','${objetoindividual.descripcion}','${objetoindividual.tiempo}')">Editar</a>
           </td>
       </tr>`;
        }
}


consultardatos();

function mostrarModal(id){
    
    document.getElementById('idEliminarCurso').value = id;
    myModalEliminar.show();
   
   
   
}

function mostrarEditarModal(id2,nombre2,descripcion,tiempo){
    console.log(id2,nombre2,descripcion,tiempo);
    document.getElementById('id2').value = id2;
    document.getElementById('nombre2').value = nombre2;
    document.getElementById('descripcion').value = descripcion;
    document.getElementById('tiempo').value = tiempo;

    myModalEditar.show();
   
    
    

}

formulario.addEventListener('submit', function(e)
{
    
    e.preventDefault();
   var datosCurso = {
        "id" :document.getElementById('id2').value ,
        "nombre" :document.getElementById('nombre2').value ,
        "descripcion" :document.getElementById('descripcion').value ,
        "tiempo" :document.getElementById('tiempo').value ,
        "usuario" :"Edwin Ceron"


   }
   apiurl = apibase + apicrear;
   fetch (apiurl, {
    method:'POST',
    body: JSON.stringify(datosCurso)
   })
   .then(estructura => estructura.json())
   .then((datosrespuestaCurso) => {
        
        completeInsert()
   })
   .catch(console.log);
});

function completeInsert(){
    myModalEditar.hide();
    window.location.reload();
    
    
}


function eliminarCurso(){
    var datosEliminarCurso = {
        "id": document.getElementById('idEliminarCurso').value
    }
    fetch(apieliminar, {
        method: 'POST',
        body: JSON.stringify(datosEliminarCurso)
    })
    .then(estructura => estructura.json())
    .then((datosDeleteCurso) => {
        //console.log(datosrespuesta)
        myModalEliminarEstudiante.hide();
        tablaresultadoEstudiante.innerHTML = ``;
    window.location.reload();
    })
    .catch(console.log);
   

}