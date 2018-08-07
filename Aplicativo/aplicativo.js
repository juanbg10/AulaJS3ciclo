function proxPerg(perguntaAtual){

//	classe.style.marginLeft = "auto";
//	classe.mudar.style.marginRight = "auto";
	
	
	var mudar = document.querySelector("#prox");
	mudar.innerHTML = "Próxima";
	mudar.style.padding = "2%";
	mudar.style.marginLeft = "auto";
	mudar.style.marginRight = "auto";
	mudar.style.marginTop = "5%";
	mudar.style.marginBottom = "3%";
	mudar.style.fontFamily = "'Press Start 2P', courier, verdana, arial";
	mudar.style.backgroundColor = "#fff";
	mudar.style.color = "red";
	mudar.style.border = "thick solid red";
	mudar.style.fontSize = "90%";
	mudar.style.borderRadius = "1.2em";
	
	
	
	var array =[
	"1. A velocidade da luz é igual a 299.792m/s",
	"2. Albert Einstein criou a teoria dos Buracos Negros?",
	"3. Fenol é uma classe de compostos orgânicos?",
	"4. Morango é uma fruta na classificação cientifica?",
	"5. Ex: 3+7+6x5+10/5x5=2",
	"6. Descoberta do Brasil foi em 1500.",
	"7. Oscar Niemeyer é o arquiteto responsável pelo prédio da ONU em NY? ",
	"8. Esse site possui CSS?",
	"9. O carlor existe atraves de vibrações de moleculas?",
	"10. A aranha é um inseto?",
	];
	
	var array2 = [
		
		];

	
	var quest = document.querySelector("#questionario");
	var body = document.querySelector("body");
	body.appendChild(quest);
	quest.style.backgroundColor = "#eee";
	quest.style.textAlign = "center";
	quest.style.width = "50%";
	quest.style.marginLeft ="auto";
	quest.style.marginRight ="auto";
	quest.style.border = "thick solid #000";
	quest.style.fontFamily = "'Press Start 2P', monospace, verdana, arial";
	quest.style.fontSize = "100%";

	
		if(perguntaAtual <= 8){
	
			perguntaAtual += 1;
			mudar.setAttribute("onclick","proxPerg("+perguntaAtual+")");
			var pergunta = document.createElement("p");
			pergunta.innerHTML = array[perguntaAtual];
			var div = document.getElementById("questionario");
			div.appendChild(pergunta);
			
			var inputSim = document.createElement("input");
			inputSim.type = "radio";
			inputSim.name = "resposta"+perguntaAtual.toString();
			inputSim.value = true;
			//inputSim.onclick = "soma(this)";
			inputSim.style.marginBottom = "5%";
			
			var inputNao = document.createElement("input");
			inputNao.type = "radio";
			inputNao.name = "resposta"+perguntaAtual.toString();
			inputNao.value = false;
			//inputNao.onclick = "soma(this)";
			inputNao.style.marginBottom = "5%";
				
			var labelS = document.createElement("label");
			labelS.innerHTML = "Verdadeiro";
			div.appendChild(labelS);
			labelS.appendChild(inputSim);
			labelS.style.padding = "2%";
			labelS.style.fontFamily = "'Press Start 2P', Andale Mono, monospace";
			labelS.style.marginBottom = "5%";
			labelS.style.fontSize = "80%";
			labelS.style.color = "#7CBD1E";
		
			var labelN = document.createElement("label");
			labelN.innerHTML = "Falso";
			div.appendChild(labelN);
			labelN.appendChild(inputNao);
			labelN.style.padding = "2%";
			labelN.style.fontFamily = "'Press Start 2P', Andale Mono, monospace";
			labelN.style.marginBottom = "5%";
			labelN.style.fontSize = "80%";
			labelN.style.color = "#DE3C3C";
			
		} else {
			
			mudar.parentNode.removeChild(mudar);
			alert("GABRITO:  verdadeiro,  falso,  verdadeiro,  falso,  verdadeiro,  verdadeiro,  verdadeiro,  falso,  verdadeiro,  falso.");
			alert("Fim do Jogo");
			//mudar.disabled = true;
		
			
		}
		
	}
	
	
	
	
	