$(document).ready(function (){
    $.ajax("peticion.php",{
        dataType: 'json',
        cache: false,
        beforeSend: function () {
            $("#status").html("cargando...");
        }
    }).done(function (response){
        var html="<option selected='selected'>Escoja una opción</option>";
        $.each(response,function (index,element){
            var array=Object.keys(element);
            for (var i = 0, max = array.length; i < max; i++) {
                html+="<option>"+array[i]+"</option>";
            }return false;
        });
        $("#selector").append(html);
    }).fail(function (request, errorType, errorMessage){
        $("#status").html(errorMessage);
    }).always(function (){
        $("#status").html("completado");
    });
    
    $('#selector').on('change',function (){
        var value=$(this).val();
        $.ajax('peticion.php',{
            dataType: 'json',
            cache: false,
            beforeSend: function () {
                $("#status").html("cargando...");
        }}).done(function (response){
            var html="";
            $.each(response,function (index, element) {
                var array=Object.keys(element);
                for (var i = 0; i < array.length; i++) {
                    if(array[i]===value){
                        var value2 =eval("element."+value);//cambiar texto a nombre de variable
                        html += value2 + "</br>";
                    }
                }
                
            });
            $("#caja").html(html);
        }).always(function (){
            $("#status").html("completado");
        }).fail(function (request,errorType,errorMessage){
            $("#status").html(errorMessage);
        });
    });
});
//librerias: templating libraries, underscore, mustache, handlebars