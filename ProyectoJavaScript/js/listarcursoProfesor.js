

const newLocalProfesor = "https://paginas-web-cr.com/ApiPHP/apis/ListaProfesores.php";
var apiconsultarProfesor = newLocalProfesor;
var apieliminarProfesor = "https://paginas-web-cr.com/ApiPHP/apis/BorrarProfesores.php";
var apibaseProfesor = "https://paginas-web-cr.com/ApiPHP/apis/";
var apicrearProfesor = "ActualizarProfesores.php";


const myModalEliminarProfesor = new bootstrap.Modal(document.getElementById('myModalEliminarProfesor'));

const myModalEditarProfesor = new bootstrap.Modal(document.getElementById('myModalEditarProfesor'));

const myModalsuccessProfesor = new bootstrap.Modal(document.getElementById('myModalsuccessProfesor'));



let tablaresultadoProfesor = document.querySelector('#tablaresultadoProfesor');
function consultardatosProfesor(){
    fetch(apiconsultarProfesor)
    .then(estructuraProfesor => estructuraProfesor.json())
    .then((datosrespuestaProfesor) => {
        
        ajustardatostablaProfesor(datosrespuestaProfesor.data);
    })
    .catch(console.log);
}

function ajustardatostablaProfesor(datos3){
        
        for (const objetoindividual3 of datos3) {
         

           tablaresultadoProfesor.innerHTML += `
            <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  <link href="assets/vendor/aos/aos.css" rel="stylesheet">
  <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
  <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">

  <!-- Template Main CSS File -->
  <link href="assets/css/main.css" rel="stylesheet">
           <tr class="table-success text-align-center " >
           <td scope="row">${objetoindividual3.id}</td>
           <td>${objetoindividual3.cedula}</td>
           <td>${objetoindividual3.correoelectronico}</td>
           <td>${objetoindividual3.telefono}</td>
           <td>${objetoindividual3.telefonocelular}</td>
           <td>${objetoindividual3.fechanacimiento}</td>
           <td>${objetoindividual3.sexo}</td>
           <td>${objetoindividual3.direccion}</td>
           <td>${objetoindividual3.nombre}</td>
           <td>${objetoindividual3.apellidopaterno}</td>
           <td>${objetoindividual3.apelidomaterno}</td>
           <td>${objetoindividual3.nacionalidad}</td>
           <td>${objetoindividual3.idCarreras}</td>
           <td>${objetoindividual3.usuario}</td>
           <td>
           <a name="Eliminar" id="Eliminar" class="btn-get-started"  role="button" data-target="#myModalEliminarProfesor" onclick="mostrarModalProfesor('${objetoindividual3.id}')">Eliminar</a>
           <a name="Editar" id="editar" class="btn-get-started"  role="button" data-target="#myModalEditarProfesor" onclick="mostrarEditarModalProfesor('${objetoindividual3.id}','${objetoindividual3.cedula}','${objetoindividual3.correoelectronico}','${objetoindividual3.telefono}','${objetoindividual3.telefonocelular}','${objetoindividual3.fechanacimiento}','${objetoindividual3.sexo}','${objetoindividual3.direccion}','${objetoindividual3.nombre}','${objetoindividual3.apellidopaterno}','${objetoindividual3.apellidomaterno}','${objetoindividual3.nacionalidad}','${objetoindividual3.idCarreras}')">Editar</a>
           </td>
       </tr>`;
        }
}


consultardatosProfesor();

function mostrarModalProfesor(id){
    document.getElementById('idEliminar2').value = id;
   myModalEliminarProfesor.show();
   
   
}

function mostrarEditarModalProfesor(id,cedula,correoelectronico,telefono,telefonocelular,fechanacimiento,sexo,direccion,nombre,apellidopaterno,apellidomaterno,nacionalidad,idCarreras){
    
    document.getElementById('idProfesor').value = id;
    document.getElementById('cedulaProfesor').value = cedula;
    document.getElementById('correoelectronicoProfesor').value = correoelectronico;
    document.getElementById('telefonoProfesor').value = telefono;
    document.getElementById('telefonocelularProfesor').value = telefonocelular;
    document.getElementById('fechanacimientoProfesor').value = fechanacimiento;
    document.getElementById('sexoProfesor').value = sexo;
    document.getElementById('direccionProfesor').value = direccion;
    document.getElementById('nombreProfesor').value = nombre;
    document.getElementById('apellidopaternoProfesor').value = apellidopaterno;
    document.getElementById('apellidomaternoProfesor').value = apellidomaterno;
    document.getElementById('nacionalidadProfesor').value = nacionalidad;
    document.getElementById('idCarrerasProfesor').value = idCarreras;

    myModalEditarProfesor.show();
   
    
    

}



formularioProfesor.addEventListener('submit', function(e)
{
    
    e.preventDefault();
   var datosEditar = {
        "id" :document.getElementById('idProfesor').value ,
        "cedula" :document.getElementById('cedulaProfesor').value ,
        "correoelectronico" :document.getElementById('correoelectronicoProfesor').value ,
        "telefono" :document.getElementById('telefonoProfesor').value ,
        "telefonocelular" :document.getElementById('telefonocelularProfesor').value ,
        "fechanacimiento" :document.getElementById('fechanacimientoProfesor').value ,
        "sexo" :document.getElementById('sexoProfesor').value ,
        "direccion" :document.getElementById('direccionProfesor').value ,
        "nombre" :document.getElementById('nombreProfesor').value ,
        "apellidopaterno" :document.getElementById('apellidopaternoProfesor').value ,
        "apellidomaterno" :document.getElementById('apellidomaternoProfesor').value ,
        "nacionalidad" :document.getElementById('nacionalidadProfesor').value ,
        "idCarreras" :document.getElementById('idCarrerasProfesor').value ,
        "usuario" :"Edwin Ceron"


   }
  var apiurlProfesor = apibaseProfesor + apicrearProfesor;
   fetch (apiurlProfesor, {
    method:'POST',
    body: JSON.stringify(datosEditar)
   })
   .then(estructura => estructura.json())
   .then((datosres) => {
    myModalEditarProfesor.hide();
    window.location.reload();
    
   })
   .catch(console.log);
});



function eliminarProfesor(){
    var datosEliminar = {
        "id": document.getElementById('idEliminar2').value
    }
    fetch(apieliminarProfesor, {
        method: 'POST',
        body: JSON.stringify(datosEliminar)
    })
    .then(estructura => estructura.json())
    .then((datosDelete) => {
        //console.log(datosrespuesta)
        myModalEliminarProfesor.hide();
        tablaresultadoProfesor.innerHTML = ``;
    window.location.reload();
    })
    .catch(console.log);
   

}




    
