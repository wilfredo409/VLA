<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <FormularioPropina></FormularioPropina>
</template>

<script>

import FormularioPropina from './components/FormularioPropina.vue';


export default {
  name: 'App',
  components: {
    FormularioPropina
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
