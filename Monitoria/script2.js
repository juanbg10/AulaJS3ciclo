function inserirNovaLinha() {
    var tr = document.createElement("tr"); //criação
    tr.innerHTML = "Sou um novo tr";
    tr.style.backgroundColor = "#aaa";
    var table = document.querySelector("table");
    
    table.appendChild(tr); //colocar como filho o "tr" criado no table
    
    inserirDado(tr, "rebeca");
    inserirDado(tr, "21");
    inserirDado(tr, "back-end");

  

}

function inserirDado(tr, texto){
    var td = document.createElement("td");
    // var tr = document.querySelector("tr");
    td.innerHTML = texto;
    td.style.background = "red";
    tr.appendChild(td);
}
