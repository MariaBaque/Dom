
function myFunction() {
    var x = document.getElementsByTagName("P").length;
    var wordOn = "<span class='on'>W3Schools</span>";
    
    
    for(var j = 0; j < x; j++){
        for(var i = 0; i < x; i++){
            var str = document.getElementsByTagName("P")[i].innerHTML; 
            var res = str.replace("Microsoft", wordOn);
            document.getElementsByTagName("P")[i].innerHTML = res;
        }
        
    } 
    
    document.getElementById("btn").addEventListener("click",myFunctionoff);
    
function myFunctionoff() {
    var x = document.getElementsByTagName("P").length;
    var wordOn2 = "<span class='on2'>hola</span>";
    for(var j = 0; j < x; j++){
        for(var i = 0; i < x; i++){            
            var str1 = document.getElementsByTagName("P")[i].innerHTML;
            var res1 = str1.replace("Microsoft", wordOn2);
            document.getElementsByTagName("P")[i].innerHTML = res1;
            
            var btn2 = document.getElementById('btn').innerHTML; 
            var res2 = btn2.replace("on", "off");
            document.getElementById("btn").innerHTML = res2;
        }
    }    

}

}


window.onload = function () { /*hace que se cargue la función lo que predetermina que div estará oculto hasta llamar a la función nuevamente*/
  //muestra_oculta('contenido_a_mostrar'); /* "contenido_a_mostrar" es el nombre que le dimos al DIV */
  //highlighterPen();

}