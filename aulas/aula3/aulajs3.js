function teste(){
    var obj = {"salario":934}; //OBJETO VAZIO
    obj["nome"] = "JOÃO";
    obj["idade"] = 24;
    document.write(obj.nome + "<br>");
    document.write(obj.idade + "<br>");
    document.write(obj.salario + "<br>" + "<br>");
}

function teste2(){
    var aluno = {};
    aluno["nome"] = "Khayan";
    aluno["idade"] = 28;
    aluno["disciplina"] = "JavaScript";
    aluno["nota"] = {"P1": 4, "P2":6, "P3":7};
    
    for(var chave in aluno){
         document.write(chave + " -> " + aluno[chave] + "<br>" );
    }
    /*
    document.write(aluno.nome + "<br>");
    document.write(aluno.idade + "<br>");
    document.write(aluno.disciplina + "<br>");
    document.write(aluno.nota + "<br>");*/
    document.write(aluno.nota.P2 + "<br>" + "<br>" + "<br>");
}

function teste3(){
        var alunos = [
            {nome:"Khayan", idade:28},
            {nome:"Victor Ferraz", idade:25},
            {nome:"Daniela", idade:32}
            
];
            for(i=0; i<alunos.length; i++){
            verOBj((alunos)[i]);
            
            }
    
}


function verOBj(obj){
    for(var chave in obj){
        document.write(chave + " -> " + obj[chave] + "<br>");
    }
}


function teste4(){
    var  funcionarios = [
        {nome:"João", salario:900},
        {nome:"Maria", salario:1100},
        {nome:"Pedro", salario:974},
        {nome:"Marx", salario:1000}
        ];
        
        document.write(somarSalarios(funcionarios));
        
    
} 


function somarSalarios(listFunc){
    var soma = 0;
    for( var i=0; i<listFunc.length; i++){
        soma = soma + listFunc[i].salario;
    }
}