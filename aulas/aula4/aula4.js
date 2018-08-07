function ver(obj){
        
        var aux = "";
        for(var indice in obj){
            aux = aux + indice + " -> " + obj[indice] + "<br>";
        }
    
    document.write(aux);
    
}

function teste(){
    
    //variavel "p" é um objeto do paragrafo
    var p = document.getElementById("p1");
    var div = document.getElementById("d1");
   // ver(p);
    p.innerHTML="MUDADO!"; //altera qaulquer tag
    p.style.backgroundColor = "#225555"; //altera qaulquer tag
    p.style.color = "#ffffff"
    p.style.padding = "4%";
    p.style.fontFamily = "verdana";
    div.style.marginTop = "4%";
    div.innerHTML="DIV MUDADA";
    div.style.backgroundColor = "blue";
    var btn = document.getElementById("b1");
    var bbb = document.getElementById("b2");
    btn.disabled = true;
    ver(p);
}


function botao(btn){//botao()
    
    alert(btn.innerHTML);
   // var bnt = document.getElementById("b1");
  //alert("Salve!");
}