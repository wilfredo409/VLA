<template>
    <div class="container">
    <h1>RESTAURANTE LA NUEVA RECETA</h1>
    <form>
    <p>Total de la cuenta</p>
    <input id="totalCuenta" type="number">
    <p>Escoge el porcentaje de propina que quieres pagar</p>
    <button type="button" class="btn btn-primary" @click="propina3">3%</button>
    <button type="button" class="btn btn-primary" @click="propina5">5%</button>
    <button type="button" class="btn btn-primary" @click="propina7">7%</button>
    <button type="button" class="btn btn-primary" @click="propina10">10%</button>
    <button type="button" class="btn btn-primary" @click="propina13">13%</button>
    <br>
    <button class="btn btn-primary" type="reset" @click="reset">Limpiar</button>
    <h1 id="textoRespuesta">Total a pagar: </h1>
</form>
</div>
</template>

<script>
export default {
  name: 'FormularioPropina',
  methods: {
    propina3(){
        var subtotal = document.getElementById("totalCuenta").value;
        var propina = subtotal * 0.03;
        var total = parseFloat(subtotal) + parseFloat(propina);
        document.getElementById('textoRespuesta').innerHTML = "Total a pagar: US$" + total;
    },
    propina5(){
        var subtotal = document.getElementById("totalCuenta").value;
        var propina = subtotal * 0.05;
        var total = parseFloat(subtotal) + parseFloat(propina);
        document.getElementById('textoRespuesta').innerHTML = "Total a pagar: US$" + total;
    },
    propina7(){
        var subtotal = document.getElementById("totalCuenta").value;
        var propina = subtotal * 0.07;
        var total = parseFloat(subtotal) + parseFloat(propina);
        document.getElementById('textoRespuesta').innerHTML = "Total a pagar: US$" + total;
    },
    propina10(){
        var subtotal = document.getElementById("totalCuenta").value;
        var propina = subtotal * 0.10;
        var total = parseFloat(subtotal) + parseFloat(propina);
        document.getElementById('textoRespuesta').innerHTML = "Total a pagar: US$" + total;
    },
    propina13(){
        var subtotal = document.getElementById("totalCuenta").value;
        var propina = subtotal * 0.13;
        var total = parseFloat(subtotal) + parseFloat(propina);
        document.getElementById('textoRespuesta').innerHTML = "Total a pagar: US$" + total;
    },
    reset(){
        document.getElementById("textoRespuesta").innerHTML = "Total a pagar: ";
    }


  }
}
</script>