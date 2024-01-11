<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <FormularioContacto></FormularioContacto>
</template>

<script lang="ts">

import FormularioContacto from './components/FormularioContacto.vue';

export default {
  components: {
    FormularioContacto
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
