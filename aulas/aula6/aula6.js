function ver(obj) {
    var aux = "";
    for(var indice in obj){
        aux = aux + indice + " -> " + obj[indice] + "<br>";
    }
    document.write(aux);
}



function teste() {
    var div = document.createElement("div");
    //div.innerHTML = "DIV CRIADA";
    div.style.backgroundColor = "pink";
    
    var p = document.createElement("p");
    p.innerHTML = "PARAGRAFO";
    
    div.appendChild(p);                 //inserindo o 'p' na 'div'
    document.body.appendChild(div);     //inserindo a 'div' no 'body'
}



// 'v' é um vetor com nomes
function montar(v) {
    var ul = document.createElement("ul");
    for (var i=0;i<v.length;i++) {
        var li = document.createElement("li");
        li.innerHTML = v[i];
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
}




function principal() {
    montar(["MATHEUS","MATHEUS","DANIELA"]);
}

function teste() {
    var div = document.createElement("div");
    //div.innerHTML = "DIV CRIADA";
    div.style.backgroundColor = "pink";
    
    var p = document.createElement("p");
    p.innerHTML = "PARAGRAFO";
    
    div.appendChild(p);                 //inserindo o 'p' na 'div'
    document.body.appendChild(div);     //inserindo a 'div' no 'body'
}



function ex1() {
    var div = document.createElement("div");
    div.style.backgroundColor = "red";
    
    var p1 = document.createElement("p");
    p1.innerHTML = "PARAGRAFO1";
    
    var p2 = document.createElement("p");
    p2.innerHTML = "PARAGRAFO2";
    
    var spam1 = document.createElement("spam");
    spam1.innerHTML = "SPAM";
    
    div.appendChild(p1); 
    div.appendChild(p2);
    div.appendChild(spam1);
    document.body.appendChild(div);
}


function ex2Aux(r) {
    var ul = document.createElement("ul");
    for (var i=0; i<r.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = r[i];
      
            if(i%2 == 0) {
                li.style.backgroundColor = "yellow";
            }
            
        ul.appendChild(li);
        
    }
    document.body.appendChild(ul);
}




function ex2() {
    ex2Aux(["Juan", "Lucas", "Allan", "Matheus"]);
  
}


function montarEx03(n) {
    var div = document.createElement("div");
    div.setAttribute("id","d1");
    
    var ul = document.createElement("ul");
    for (var i=1;i<=n;i++) {
        var li = document.createElement("li");
        li.innerHTML = i;
        ul.appendChild(li);
    }
    div.appendChild(ul);
    document.body.appendChild(div);
}

function ex3() {
    montarEx03(10);
}



function altera() {
    var div = document.querySelector("#d4");
    var h1 = document.createElement("h1");
    h1.innerHTML = "TITULO";
    //troca div pelo h1
    div.parentNode.replaceChild(h1,div);
    
}

function remover() {
    
    var div = document.querySelector("#d4");
    div.parentNode.removeChild(div);
}


function inserir() {
    var div = document.querySelector("#d2");
    var h1 = document.createElement("h1");
    h1.innerHTML = "H1 ANTES";
    var h2 = document.createElement("h2");
    h2.innerHTML = "H2 ANTES";
    div.parentNode.insertBefore(h1,div);
    div.parentNode.insertBefore(h2,div.nextSibling);
}

function ex4() {
    var div = document.createElement("div");
    div.innerHTML = document.forms.teste.nome.value;
    div.setAttribute("id","divNome");
    document.body.appendChild(div);
}

function ex5() {
    var div = document.querySelector("#divNome");
    div.parentNode.removeChild(div);
}

function criarCabeca() {
    var table = document.createElement("table");
    var thead = document.createElement("thead");
    var tr = document.createElement("tr");
    var nome = document.createElement("th");
    var ra = document.createElement("th");
    var curso = document.createElement("th");
    
    nome.innerHTML = "Nome";
    ra.innerHTML = "RA";
    curso.innerHTML = "Curso";
    
    tr.appendChild(nome);
    tr.appendChild(ra);
    tr.appendChild(curso);
    tr.style.textAlign = "left";
    
    thead.appendChild(tr);
    table.appendChild(thead);
    table.setAttribute("id","tabela");
    
    document.body.appendChild(table);
}

function criarTabela(vObj) {
    criarCabeca();
    var table = document.querySelector("#tabela");
    var tbody = document.createElement("tbody");
    for (var i=0;i<vObj.length;i++) {
        var tr = document.createElement("tr");
        var tdNome = document.createElement("td");
        tdNome.innerHTML = vObj[i].nome;
        tr.appendChild(tdNome);
        
        var tdRA = document.createElement("td");
        tdRA.innerHTML = vObj[i].ra;
        tr.appendChild(tdRA);
        
        var tdCurso = document.createElement("td");
        tdCurso.innerHTML = vObj[i].curso;
        tr.appendChild(tdCurso);
        
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
}

// {nome:"Lucas",ra:"0050831711023",curso:"SI"}
// {nome:"Juan",ra:"0050831711020",curso:"SI"}
function criar() {
    criarTabela([{nome:"Lucas",ra:"0050831711023",curso:"SI"},
        {nome:"Juan",ra:"0050831711020",curso:"SI"}]);
}