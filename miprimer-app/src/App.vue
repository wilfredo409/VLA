<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <br>
  <FormularioEnviar></FormularioEnviar>
  <SaludarAlPublico
  nombrePersona="Edwin Ceron"
  lugarClase="FrontEnd Developer"
  horarioClase="Lunes Noche"
  ></SaludarAlPublico>
  <br>
  <SaludarAlPublico
  nombrePersona="Juan Valdez"
  lugarClase="Programación 4"
  horarioClase="Miércoles Noche"
  ></SaludarAlPublico>
</template>

<script>

import SaludarAlPublico from './components/SaludarAlPublico.vue';
import FormularioEnviar from './components/FormularioEnviar.vue';

export default {
  name: 'App',
  components: {
    
    SaludarAlPublico,
    FormularioEnviar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
