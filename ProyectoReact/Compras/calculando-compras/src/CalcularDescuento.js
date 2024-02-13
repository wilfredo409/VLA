import React, {useState} from "react";

function CalcularDescuento(){

    /*
    Si la compra es mayor a 200.000   1%
    visa  3%
    Mastercard  4%
    */

    const [monto, setMonto]= useState(200000);
    const [tipoTarjeta, setTipoTarjeta] = useState("visa");
    const [descuentoAplicado, setDescuentoAplicado] = useState(0);

    function CalcularDescuentoPago(){

        let descuento = 0;

        if (monto>=200000)
            descuento = descuento + 1;

        if(tipoTarjeta.toUpperCase() === "VISA")
            descuento = descuento + 3;
        else
            descuento = descuento + 4;

    setDescuentoAplicado((monto*descuento)/100);
        

    }

    function Limpiar(){
        console.log("Limpiando");
    }

    return(
        <div>
            <h1>Calcule el descuento</h1>
            <label>Digite el monto</label>
            <input className="form-control"></input>
            <label>Que tipo de tarjeta</label>
            <input className="form-control"></input>
            <br></br>
            <button className="btn btn-primary" onClick={CalcularDescuentoPago}>Calcular</button>
            <button className="btn btn-primary" onClick={Limpiar} >Limpiar</button>
            <h1>Su monto a pagar es {descuentoAplicado} </h1>
            </div>
    )
}

export default CalcularDescuento;