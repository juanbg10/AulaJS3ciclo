function clicar(img){
   
   if(img.src=="https://js-class-juanbg10.c9users.io/test/aula4/Sem%20t%C3%ADtulo.png"
  ) 
    img.src= "Sem título2.png";
   else
   img.src= "Sem título.png";
   
  
}


function ver(obj){
        
        var aux = "";
        for(var indice in obj){
            aux = aux + indice + " -> " + obj[indice] + "<br>";
        }
    
    document.write(aux);
    
    
}
