function gerarAlunos(){
    
        var materias = [
            document.getElementById("p1").innerHTML,
            document.getElementById("p2").innerHTML,
            document.getElementById("p3").innerHTML
        ];
    
        var materiasAlunos = [
            {materia: materias[0], nota: 6.5, nota1: 8},
            {materia: materias[1], nota: 9.5, nota2: 6},
            {materia: materias[2], nota: 4.5, nota3: 10}
        ];
        
        var notas1 = [];
        var notas2 = [];
        for (var i in materiasAlunos){
            notas1[i] = materiasAlunos[i].nota1;
            notas2[i] = materiasAlunos[i].nota2;
        }
      mostrarObjeto(materiasAlunos);
      //calcularMedias(notas1, notas2);
}    


function mostrarObjeto(obj){
    for(var i in obj){
        document.write(obj[i].materia + "<br>");
    }
 
 

}
    
function calcularMedias(notas1, notas2){
    var medias = [];
    
    for(var i in notas1){
        medias[i] = (notas1[i] + notas2[i])/2;
        }
        
    
    for(var i = 0; i<medias.length; i++){
        document.write(medias[i]);
        }
    
    
    }