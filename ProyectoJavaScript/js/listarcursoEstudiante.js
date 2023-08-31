

const newLocalEstudiante = "https://paginas-web-cr.com/ApiPHP/apis/ListaEstudiantes.php";
var apiconsultarEstudiante = newLocalEstudiante;
var apieliminarEstudiante = "https://paginas-web-cr.com/ApiPHP/apis/BorrarEstudiantes.php";
var apiInsertarEstudiante = "https://paginas-web-cr.com/ApiPHP/apis/InsertarEstudiantes.php";
var apibaseEstudiante = "https://paginas-web-cr.com/ApiPHP/apis/";
var apicrearEstudiante = "ActualizarEstudiantes.php";


const myModalEliminarEstudiante = new bootstrap.Modal(document.getElementById('myModalEliminarEstudiante'));

const myModalEditarEstudiante = new bootstrap.Modal(document.getElementById('myModalEditarEstudiante'));

const myModalsuccessEstudiante = new bootstrap.Modal(document.getElementById('myModalsuccessEstudiante'));

const myModalCrearEstudiante = new bootstrap.Modal(document.getElementById('myModalCrearEstudiante'));


let tablaresultadoEstudiante = document.querySelector('#tablaresultadoEstudiante');
function consultardatosEstudiante(){
    fetch(apiconsultarEstudiante)
    .then(estructuraEstudiante => estructuraEstudiante.json())
    .then((datosrespuestaEstudiante) => {
        
        ajustardatostablaEstudiante(datosrespuestaEstudiante.data);
    })
    .catch(console.log);
}

function ajustardatostablaEstudiante(datos2){
        
        for (const objetoindividual2 of datos2) {
         

           tablaresultadoEstudiante.innerHTML += `
            <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  <link href="assets/vendor/aos/aos.css" rel="stylesheet">
  <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
  <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">

  <!-- Template Main CSS File -->
  <link href="assets/css/main.css" rel="stylesheet">
           <tr class="table-success text-align-center " >
           <td scope="row">${objetoindividual2.id}</td>
           <td>${objetoindividual2.cedula}</td>
           <td>${objetoindividual2.correoelectronico}</td>
           <td>${objetoindividual2.telefono}</td>
           <td>${objetoindividual2.telefonocelular}</td>
           <td>${objetoindividual2.fechanacimiento}</td>
           <td>${objetoindividual2.sexo}</td>
           <td>${objetoindividual2.direccion}</td>
           <td>${objetoindividual2.nombre}</td>
           <td>${objetoindividual2.apellidopaterno}</td>
           <td>${objetoindividual2.apelidomaterno}</td>
           <td>${objetoindividual2.nacionalidad}</td>
           <td>${objetoindividual2.idCarreras}</td>
           <td>${objetoindividual2.usuario}</td>
           <td>
           <a name="Eliminar" id="Eliminar" class="btn-get-started"  role="button" data-target="#myModalEliminarEstudiante" onclick="mostrarModalEstudiante('${objetoindividual2.id}')">Eliminar</a>
           <a name="Editar" id="editar" class="btn-get-started"  role="button" data-target="#myModalEditarEstudiante" onclick="mostrarEditarModalEstudiante('${objetoindividual2.id}','${objetoindividual2.cedula}','${objetoindividual2.correoelectronico}','${objetoindividual2.telefono}','${objetoindividual2.telefonocelular}','${objetoindividual2.fechanacimiento}','${objetoindividual2.sexo}','${objetoindividual2.direccion}','${objetoindividual2.nombre}','${objetoindividual2.apellidopaterno}','${objetoindividual2.apellidomaterno}','${objetoindividual2.nacionalidad}','${objetoindividual2.idCarreras}')">Editar</a>
           </td>
       </tr>`;
        }
}


consultardatosEstudiante();

function mostrarModalEstudiante(id){
    document.getElementById('idEliminar').value = id;
   myModalEliminarEstudiante.show();
   
   
}

function mostrarEditarModalEstudiante(id,cedula,correoelectronico,telefono,telefonocelular,fechanacimiento,sexo,direccion,nombre,apellidopaterno,apellidomaterno,nacionalidad,idCarreras){
    
    document.getElementById('id').value = id;
    document.getElementById('cedula').value = cedula;
    document.getElementById('correoelectronico').value = correoelectronico;
    document.getElementById('telefono').value = telefono;
    document.getElementById('telefonocelular').value = telefonocelular;
    document.getElementById('fechanacimiento').value = fechanacimiento;
    document.getElementById('sexo').value = sexo;
    document.getElementById('direccion').value = direccion;
    document.getElementById('nombre').value = nombre;
    document.getElementById('apellidopaterno').value = apellidopaterno;
    document.getElementById('apellidomaterno').value = apellidomaterno;
    document.getElementById('nacionalidad').value = nacionalidad;
    document.getElementById('idCarreras').value = idCarreras;

    myModalEditarEstudiante.show();
   
    
    

}



formularioEstudiante.addEventListener('submit', function(e)
{
    
    e.preventDefault();
   var datosEditar = {
        "id" :document.getElementById('id').value ,
        "cedula" :document.getElementById('cedula').value ,
        "correoelectronico" :document.getElementById('correoelectronico').value ,
        "telefono" :document.getElementById('telefono').value ,
        "telefonocelular" :document.getElementById('telefonocelular').value ,
        "fechanacimiento" :document.getElementById('fechanacimiento').value ,
        "sexo" :document.getElementById('sexo').value ,
        "direccion" :document.getElementById('direccion').value ,
        "nombre" :document.getElementById('nombre').value ,
        "apellidopaterno" :document.getElementById('apellidopaterno').value ,
        "apellidomaterno" :document.getElementById('apellidomaterno').value ,
        "nacionalidad" :document.getElementById('nacionalidad').value ,
        "idCarreras" :document.getElementById('idCarreras').value ,
        "usuario" :"Edwin Ceron"


   }
  var apiurlEstudiante = apibaseEstudiante + apicrearEstudiante;
   fetch (apiurlEstudiante, {
    method:'POST',
    body: JSON.stringify(datosEditar)
   })
   .then(estructura => estructura.json())
   .then((datosres) => {
    myModalEditarEstudiante.hide();
    window.location.reload();
    
   })
   .catch(console.log);
});



function eliminarEstudiante(){
    var datosEliminar = {
        "id": document.getElementById('idEliminar').value
    }
    fetch(apieliminarEstudiante, {
        method: 'POST',
        body: JSON.stringify(datosEliminar)
    })
    .then(estructura => estructura.json())
    .then((datosDelete) => {
        //console.log(datosrespuesta)
        myModalEliminarEstudiante.hide();
        tablaresultadoEstudiante.innerHTML = ``;
    window.location.reload();
    })
    .catch(console.log);
   

}


function crearEstudiante(){
    myModalCrearEstudiante.show();
    
    }
    
    function CrearNuevoEstudiante(){
        var datosCrearEstudiante = {
            "cedula" :document.getElementById('cedulaCrear').value ,
        "correoelectronico" :document.getElementById('correoelectronicoCrear').value ,
        "telefono" :document.getElementById('telefonoCrear').value ,
        "telefonocelular" :document.getElementById('telefonocelularCrear').value ,
        "fechanacimiento" :document.getElementById('fechanacimientoCrear').value ,
        "sexo" :document.getElementById('sexoCrear').value ,
        "direccion" :document.getElementById('direccionCrear').value ,
        "nombre" :document.getElementById('nombreCrear').value ,
        "apellidopaterno" :document.getElementById('apellidopaternoCrear').value ,
        "apellidomaterno" :document.getElementById('apellidomaternoCrear').value ,
        "nacionalidad" :document.getElementById('nacionalidadCrear').value ,
        "idCarreras" :document.getElementById('idCarrerasCrear').value ,
        "usuario" :"Edwin Ceron"
           
    
    
       }
       
       fetch (apiInsertarEstudiante, {
        method:'POST',
        body: JSON.stringify(datosCrearEstudiante)
       })
       .then(estructura => estructura.json())
       .then((datosrespuesta) => {
        myModalCrearEstudiante.hide();
        window.location.reload();
       })
       .catch(console.log);
    
    }




    
