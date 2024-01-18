<template>
    
    <TestimoniosPersonas 
        numeroImagen ="Imagen1"
        nombrePersona="Edwin Cerón"
        cargoPersona="Aqrquitecto de software"
        textoPersona="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore odit maxime, rem reprehenderit maiores id, suscipit ex quis tempore voluptatibus deleniti repellat, eaque laboriosam? Eaque consequatur officiis quibusdam laboriosam dolorem!">
    </TestimoniosPersonas>
    <TestimoniosPersonas 
        numeroImagen="Imagen2"
        nombrePersona="Sofia Cerón"
        cargoPersona="Desarrollador jr"
        textoPersona="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore odit maxime, rem reprehenderit maiores id, suscipit ex quis tempore voluptatibus deleniti repellat, eaque laboriosam? Eaque consequatur officiis quibusdam laboriosam dolorem!">
    </TestimoniosPersonas>
    <TestimoniosPersonas 
        numeroImagen="Imagen3"
        nombrePersona="Javier Cerón"
        cargoPersona="Tester"
        textoPersona="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore odit maxime, rem reprehenderit maiores id, suscipit ex quis tempore voluptatibus deleniti repellat, eaque laboriosam? Eaque consequatur officiis quibusdam laboriosam dolorem!">
    </TestimoniosPersonas>
        
    
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

    
import TestimoniosPersonas from '@/components/TestimoniosPersonas.vue';

    @Options({
        components:{
            TestimoniosPersonas
        }
    })

    export default class TestimoniosView extends Vue{}

</script>