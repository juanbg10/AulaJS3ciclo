/**materialize frameWork Responsive
function ola(){
	alert("OLÁ!");
}
//1)faça uma rotina, ao clicar em qualquer p ela deve sumir
//2)ao clicar em qualquer botao ou div, seu conteudo html deve ser mudado
//3)ao sair de uma caixa de texto, essa deve ficar com a cor de fundo amarela
//4)ao clicar duas vezes(duplo click), em um botao esse deve sumir

function ex1(){
	$("p").click(function(){
		$(this).css("display","none");
	});
}
window.onload = ex1;


function ex2(){
	$("button").click(function(){
		$(this).html("change");
	});
	$("div").click(function(){
		$(this).html("novo Botao");
	});
}
window.onload = ex2;


function ex3(){
	$("#nome").click(function(){
		$(this).css("backgroundColor", "red")
	});
}

window.onload = ex3;

function ex4(){
	$("#hh").dblclick(function(){
		$(this).css("display", "none")
	});
}


window.onload = ex4;
**/
//---------------------------------------------------------------------------


function criarEvento(){
	$("button").click(function(){
		var n1= parseInt($("#n1").val());
		var n2= parseInt($("#n2").val());
		$("#res").html(n1+n2);//$("#n3").html(n1+n2);
	});
	$("#n1, #n2").focus(function(){
		$(this).css("backgroundColor", "yellow");
	});
	$("#n1, #n2").focus(function(){
		$(this).css("backgroundColor", "red");
		});
}

$(criarEvento);
/**

AO CLICAR EM UMA DIV QUARQUER, SUA COR DE FUNDO
FICARA AZUL
function criarEvento4(){
	$("div").click(function(){
		$(this).css("backgroundColor","blue")
	});
}
-----------------------------------------------------------
AO CLICAT NO BOTAO OK, A DIV COM CLASSE FICARA COM
O FUNDO AMARELO E O CONTEUDO DA DIV COM ID MUDARA PARA "MUDOU"

function criarEvento3(){
	$("button").click(function(){
		$(".classe1").css("backgroundColor","yellow");
			$("#div1").html("MUDOU");
		});
}
----------------------------------------------------------
Jquery
function criarEvento2(){
	$("button").click(function(){
		ola();
	});
}


NORMAL
function criarEvento2(){
	var btns = document.querySelectorAll("button");
	var btnsSlice = Array.prototype.slice.call(btns);
	btnsSlice.forEach(function(btn){
		btn.addEventListener("click",function(evt){
			ola();
		});
	});
}
----------------------------------------------------------
resumo do Jquery:
	$("SELETOR CSS").evento(CALLbACK); sintaxe
								|
								v
							função anonima


-----------------------------------------------------------

NORMAL
function criarEvento(){
	document.querySelector("button").addEventListener("click", function(evt){
	ola();
	});
}



JQUery
function criarEvento(){
	$("button").click(function(){
		ola();
	});
}*/

//document.querySelector == $($ é uma função)
//addEventListener == click