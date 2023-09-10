$(document).ready(function (){//se ha cargado todo el código html
    $('#texto').html("<h3 style='background:blue;'>soy una etiqueta h3</h3>");
    $('#msj').text('Soy un mensaje de jQuery');
    $(".option").html("<p class='hijos'>Somos mensajes enlistados de jQuery</p>");
    $(".option").addClass("opt");
    $(".option").toggleClass("opt");//si la clase no está la agrega, y si está la elimina
    //buscar hijos
    var result=$(".contenedor").find(".hijos");//busca un selector de css
    //show muestra el elemento, hide lo oculta, toggle muestra y/o oculta
    //Event Mouseout se activará cuando el mouse abandone el elemento seleccionado y también cuando el mouse deje sus elementos secundarios.
    //Evento Mouseleave se activará cuando el puntero deje solo el elemento seleccionado.
    console.log(result);
    result=$(".padre").children();//busca todos los descendientes directos del selector(sin parámetros:busca a todos, con parámetros:busca a todos con ese parámetro)
    console.log(result);
    result=$(".padre").children().first();console.log("first:");console.log(result);//busca el primer selector de la lista
    result=$(".padre").children("#msj").next();console.log("next:");console.log(result);//busca el siguiente selector
    result=$(".padre").children().last();console.log("last:");console.log(result);//busca el último selector de la lista
    result=$(".padre").children("ul").prev();console.log("prev:");console.log(result);//busca el anterior selector
    //buscar padres
    result=$("#texto").parent();console.log("parent:");console.log(result);//busca el padre directo del selector css
    result=$("#texto").parents();console.log("parents:");console.log(result);//busca todos los padres del selector css(sin parámetros:busca a todos, con parámetros:busca a todos con ese parámetro)
    result=$("#texto").closest(".contenedor");console.log("closest:");console.log(result);//busca el ancestro más cercano que cumple con la condición
    var booleano1=false;var booleano2=false;
    $("#texto").on('click',function(){
        if(booleano1){
            $('#texto').html("<h3 style='background:blue;'>soy una etiqueta h3</h3>");booleano1=false;
        }else{
            $('#texto').html("<h3 style='background:red;'>soy una etiqueta h3</h3>");booleano1=true;
        }
        //console.log(this);//muestra el código HTML del selector del evento
        //console.log($(this));//muestra el selector del evento como objeto de jQuery con sus propiedades
    });
    $(".option").on('click',function(){
        $(".option").toggleClass("opt");
        $(".option").toggleClass("style");
    });
});