<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <FormularioBienvenida></FormularioBienvenida>
  <h2>Haciendo un calculador Vue</h2>
  <calculadoraBasicaVue></calculadoraBasicaVue>
  <h2>Llenando etiquetas con V-FOR</h2>
  <LlenandoEtiquetas></LlenandoEtiquetas>
</template>

<script>

import FormularioBienvenida from './components/FormularioBienvenida.vue';
import calculadoraBasicaVue from './components/calculadora-basica.vue';
import LlenandoEtiquetas from './components/LlenandoEtiquetas.vue';
export default {
  name: 'App',
  components: {
    FormularioBienvenida,
    calculadoraBasicaVue,
    LlenandoEtiquetas
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
