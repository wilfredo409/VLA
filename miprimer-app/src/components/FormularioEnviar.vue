<template>
    <h1>Enviar Nombre</h1>
    <div class="mb-3">
      <label for="" class="form-label">Nombre</label>
      <input type="text"
        class="form-control" name="" id="prueba" aria-describedby="helpId" placeholder="">
      <small id="helpId" class="form-text text-muted">Nombre</small>
    </div>
    <button type="button" class="btn btn-primary" onclick(EnviarNombre()) >Enviar</button>
   

</template>

<script>

export default{

    
    name: 'FormularioEnviar',
    EnviarNombre(){
        var nombre= document.getElementById("prueba").value;
        alert("Su nombre es :" + nombre);
    }
   
}

</script>