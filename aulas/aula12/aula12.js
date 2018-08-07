//primeira parte


function somar(x, y){
    return x+y;
}

function teste(){
    //f possui a mesma caracteristica funcao que somar
    var f = somar;
    alert(f(5,7));
    
    //g funcao dentro da mesma chamando ela mesma
    var g = function(x,y){
        return x*y;
    }
    alert(g(5,7));
    
    //ou posso usar uma funçao em uma unica vez
    alert((function(x,y){
        return x-y;
    })(5,7))
}
 
 
//segunda parte
//funcao de alta ordem (HIGH ORDER FUNCTION) ou CALLBACK
//funcao que recebe uma funcao e/ou retorna outra funcao
function hof(f){
    return f(5) + 1;
}

function dobro(x){
    return 2*x;
}

function tst(){
    alert(hof(dobro));
}

function teste(){
    alert(hof(function(x){
        return 3*x;
    }));
}



//terceira parte, retornando function
//CURRYING:ATO DE DIVIDIR A FUNCAO QYE RECEBE VARIOS PARAMETROS
//EM VARIAS OUTRAS FUNCOES QUE RECEBEM MENOS PARAMETROS
function somacurr(x){
    return function(y){
        return x+y;
    }
}

function test2(){
    var s = somacurr(5);
    alert(s(7));//ou alert(somarcurr(5)(7))
}