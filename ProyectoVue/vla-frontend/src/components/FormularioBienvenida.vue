<template>
    <div class="container">
    <h1>Solicitando datos</h1>
    <p>Digite su nombre</p>
    <input class="form-control" type="1" id="textoNombre">
    <br>
    <button id="botonNombre" class="btn btn-primary" @click="VerNombre">Mostrar Nombre</button>
    <h3></h3>
</div>
</template>

<script>
export default {
  name: 'FormularioBienvenida',
  methods: {
    VerNombre(){
        var nombre = document.getElementById("textoNombre").value;
        if (nombre == ""){
            alert("Porfavor digite un nombre");
        }else{
        alert("EL Nombre es: " + nombre);
    }
    }

  }
}
</script>