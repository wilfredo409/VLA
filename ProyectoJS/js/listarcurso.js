var apiconsultar = "https://paginas-web-cr.com/ApiPHP/apis/ListaCurso.php"
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
       </tr>`;
        }
}

consultardatos();