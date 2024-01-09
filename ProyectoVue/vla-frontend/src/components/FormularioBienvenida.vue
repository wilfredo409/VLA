<template>
    <div class="container">
    <h1>Solicitando datos</h1>
    <p>Digite su nombre</p>
    <input class="form-control" v-model="nombrePersona" v-on:keyup="LetraPresionada" >
    <br>
    <h3>{{ nombrePersona }}</h3>
</div>
</template>

<script>
export default {
  //data() para declarar e inicializar todas las variables
  data(){
    return{
      nombrePersona:''
    };
  },
  methods: {
    LetraPresionada(){
       this.nombrePersona = this.nombrePersona.toUpperCase();
    }

  }
}
</script>