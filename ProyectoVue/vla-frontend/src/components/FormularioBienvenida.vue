<template>
    <div class="container">
    <h1>Solicitando datos</h1>
    <p>Digite su nombre</p>
    <input class="form-control" v-model="nombrePersona" type="1" >
    <br>
    <button id="botonNombre" class="btn btn-primary" @click="VerNombre">Mostrar Nombre</button>
    <h3 id="mensajeNombre">{{ nombrePersona }}</h3>
</div>
</template>

<script>
export default {
  data(){
    return{
      nombrePersona:''
    };
  },
  methods: {
    VerNombre(){
       alert(this.nombrePersona);
    }

  }
}
</script>