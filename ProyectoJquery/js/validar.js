           
    function Validar(){
      $('#myModalsesion').modal('show');
    
    }



    
       
       



    function iniciarSesion(){
      var validarurl = "https://paginas-web-cr.com/ApiPHP/apis/AutenticarUsuario.php";
           var datosValidarUsuario = {
            "email":$("#emailValidar").val(),
            "password" : $("#passwordValidar").val()
            }
        
        $.ajax({
            type: "POST",
            url: validarurl,
            data: JSON.stringify(datosValidarUsuario),
            dataType: "json",
            success: function (response) {
                if (response.data == true){
                    alert(response.data);
                   
                }else{
                    alert("Datos incorrectos por favor intente de nuevo"+ $("#passwordValidar").val()+response.data);
                    $("#btnsesion").val("Bienvenido");
                }
            }, error: function (xhr, textStatus, errorThrown){
                    console.log("Error", errorThrown);
                }
        });
        
        
        
        
        
    }
    
   