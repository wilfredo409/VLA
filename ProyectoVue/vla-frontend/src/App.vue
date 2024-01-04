<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <FormularioBienvenida></FormularioBienvenida>
</template>

<script>

import FormularioBienvenida from './components/FormularioBienvenida.vue';

export default {
  name: 'App',
  components: {
    FormularioBienvenida
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
