<template>
    
    <div class="contenedorTestimonio">
        <img class="imagenTestimonio" :src="require(`../assets/img/${numeroImagen}.png`)">
    <div class="contenedorTextoTestimonio">
        <p class="nombreTestimonio">{{nombrePersona}}</p>
        <p class="cargoTestimonio">{{cargoPersona}}</p>
        <p class="textoTestimonio">{{textoPersona}}</p>


    </div>
    
    </div>


</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
@Options({
        props:{
            nombrePersona:{
                type:String,
            
            },
            cargoPersona:{
                type: String
            },
            textoPersona:{
                type: String
            },
            numeroImagen:{
                type:String
            }


        }
    })
    
export default class TestimoniosPersonas extends Vue{

nombrePersona!: string
cargoPersona!: string
textoPersona!: string
numeroImagen!: string
}

</script>

<style>
.contenedorTestimonio{
    width: 1170px;
    height: 368px;
    margin: 10px 10px 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    box-shadow: 0 3px 13px rgb(0 0 0 / 9%);

}

.imagenTestimonio{
    height: 100%;
    width: auto;
    
}

.nombreTestimonio{
    font-size: 1.5rem;
}

.cargoTestimonio{
    font-size: 1.3rem;
    margin-top: 15px;
    padding-bottom: 30px;

}

.contenedorTextoTestimonio{
    text-align: center;
    padding: 40px;
    font-family: sans-serif;
    font-weight: 400;
    line-height: 1.5rem;
}
</style>