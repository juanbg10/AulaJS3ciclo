function exercicio(){
    var produtos = [
        {nome:"livro1", preco:78, tipo:"livro"},
        {nome:"livro2", preco:80, tipo:"livro"},
        {nome:"caneta", preco:5, tipo:"escritorio"},
        {nome:"livro3", preco:50, tipo:"livro"},
        {nome:"livro4", preco:11, tipo:"livro"}
        ];
        
          document.write(somarPreco(produtos) + "<br>")
          document.write(precoLivros(produtos) + "<br>")
            
 }
 
    

function somarPreco(produtos){
    var soma = 0;
    for(var i=0; i<produtos.length; i++){
        soma = soma + produtos[i].preco;
    } 
        return soma;
}


function precoLivros(produtos){
    var somaLivro = 0;
     for(var i=0; i<produtos.length; i++){
         if(produtos[i].tipo=="livro"){
             
          somaLivro = somaLivro + produtos[i].preco;
        } 
     } return somaLivro;
}
