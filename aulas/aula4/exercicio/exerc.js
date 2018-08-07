
function ver(obj){
        
        var aux = "";
        for(var indice in obj){
            aux = aux + indice + " -> " + obj[indice] + "<br>";
        }
    
    document.write(aux);
    
    
}

function inc(obj){
  obj.innerHTML = parseInt(obj.innerHTML) + 1;
  
}
   
  
  
