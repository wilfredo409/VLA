<template>
    <div 
        class="container"
    >

    <h4>Digite numero 1</h4>
    <input class="form-control" v-model="numero1" type="text">
    <h4>Digite numero 2</h4>
    <input class="form-control" v-model="numero2" type="text">
    <h4>Seleccione la operacion</h4>
    <select class="form-select" v-model="operacion">
        <option value="+">Sumar</option>
        <option value="-">Restar</option>
        <option value="*">Multiplicar</option>
        <option value="/">Dividir</option>

    </select>
    <button class="btn btn-primary" @click="operacion2">Operacion</button>
    <h1>El Resultado es: {{ resultado }}</h1>
    </div>
    
</template>



<script>
export default{

    data(){

        return{
            numero1:'',
            numero2:'',
            operacion:'',
            resultado:''

        };

    },
    methods: {
    operacion2(){
        if (this.operacion == '+'){
            this.resultado = parseFloat(this.numero1) + parseFloat(this.numero2);
        }
       else if (this.operacion == '-'){
            this.resultado = this.numero1 - this.numero2;
        }
       else if (this.operacion == '*'){
            this.resultado = parseFloat(this.numero1) * parseFloat(this.numero2);
        }
       else if (this.operacion == '/'){
            this.resultado = parseFloat(this.numero1) / parseFloat(this.numero2);
        }
        

    }

  }

}

</script>