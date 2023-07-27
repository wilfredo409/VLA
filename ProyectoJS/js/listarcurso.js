const newLocal = "https://paginas-web-cr.com/ApiPHP/apis/ListaCurso.php";
var apiconsultar = newLocal
var apieliminar = "https://paginas-web-cr.com/ApiPHP/apis/BorrarCursos.php";

const myModalEliminar = new bootstrap.Modal(document.getElementById('myModalEliminar'));


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

function ajustardatostabla(datos){
        
        for (const objetoindividual of datos) {
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
           <a name="Eliminar" id="Eliminar" class="btn btn-danger" data-bs-toggle="modal" role="button" onclick="mostrarModal('${objetoindividual.id}')">Eliminar</a>
           </td>
       </tr>`;
        }
}


consultardatos();

function mostrarModal(id){
    eliminandodato(id);
   myModalEliminar.show();
   
   
}

function eliminandodato(id){
    var datosEnviar = {
        "id":id
    }
    fetch(apieliminar, {
        method: 'POST',
        body: JSON.stringify(datosEnviar)
    })
    .then(estructura => estructura.json())
    .then((datosrespuesta) => {
        //console.log(datosrespuesta)
        completeDelete();
    })
    .catch(console.log);

}

function completeDelete(){
    myModalEliminar.hide();
    tablaresultado.innerHTML = ``;
    consultardatos();
}