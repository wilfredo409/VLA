<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <FormularioBienvenida></FormularioBienvenida>
  <h2>Haciendo un calculador Vue</h2>
  <CalculadoraBasica></CalculadoraBasica>
</template>

<script>

import FormularioBienvenida from './components/FormularioBienvenida.vue';
import CalculadoraBasica from './components/Calculadorabasica.vue';

export default {
  name: 'App',
  components: {
    FormularioBienvenida,
    CalculadoraBasica
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
