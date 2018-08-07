function play(){
    sendReq2();
    var butt = document.getElementById("bot");
    butt.disabled = true;
}

function sendReq2() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var objInst = JSON.parse(this.responseText);
        montaPag2(objInst);
      }
    };
  
  xhttp.open("GET", "https://api.instagram.com/v1/users/197281134/media/recent/?access_token=197281134.b51ddbc.2420d8730e0c4869ae5343ad89eced45", true);
  xhttp.send();
}

function montaPag2(objInst){
    var divMaior = document.createElement("div");
    divMaior.style.textAlign = "center";
    divMaior.style.padding = "2% 20% 5% 20%";
    divMaior.style.marginLeft = "auto";
    divMaior.style.marginRight = "auto";
        for(var i=0;i<14;i++) {
            var imgPhoto = document.createElement("img");
            var divLikes = document.createElement("div");
            var divPhoto = document.createElement("div");
            imgPhoto.style.padding = "0%";
            imgPhoto.style.width = "50%";
            imgPhoto.style.borderRadius = "10%";
            divPhoto.style.width = "100%";
            imgPhoto.style.border = "3em solid #fff";
            divPhoto.style.padding = "3%";
            divPhoto.style.marginBottom ="2%";
            divLikes.style.backgroundImage = "url('heart.png')";
            divLikes.style.padding ="2% 0%";
            divLikes.style.fontSize = "140%";
            divLikes.style.fontFamily = "Helvetica, sans-serif";
            divLikes.style.backgroundColor= "#eee";
            imgPhoto.src = objInst.data[i].images.standard_resolution.url;
            divLikes.innerHTML = objInst.data[i].likes.count;
            divPhoto.appendChild(imgPhoto);
            divMaior.appendChild(divPhoto);
            divPhoto.appendChild(divLikes);
            
        }
    document.body.appendChild(divMaior);

}

//jana
//CLIENT ID	    bd82fd48c5074515904fc94d79de6dc7
//Client Secret   580b1d3e5d324db1bdd197f8ae34f407

//khayan
//Client ID c51c0b13e1aa4563b15f2c65afdc6600
//Client Secret 3f27f777a3d340e7820d441b78409ad8



//-------------------------------------------------------------------------------------------------------------------------------------------
function sendReq() {
    var xhttp = new XMLHttpRequest();
    //AO RECEBER RESPOSTA DO SERVIDOR, HAVERA UM CALLBACK
    //DA FUNCAO ANONIMA ABAIXO:
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var objInsta = JSON.parse(this.responseText);
        montaPagina(objInsta);
      }
    };
    //abrir conexao do servidor, get pois pega da url, passa a url certa/especifica,
    //ve a resposta ja mostra
  xhttp.open("GET", "https://api.instagram.com/v1/users/self/?access_token=197281134.b51ddbc.cae2f2c3ebaa4c83afb4fb17fb9e6761", true);
  xhttp.send();
}


function montaPagina(objInsta){
    var div = document.createElement("div");
    var divId = document.createElement("div");
    var imgPhoto = document.createElement("img");
    var divUser = document.createElement("div");
    var divFB = document.createElement("div");
    divId.innerHTML = objInsta.data.id;
    imgPhoto.src = objInsta.data.profile_picture;
    divUser.innerHTML = objInsta.data.username;
    divFB.innerHTML = objInsta.data.counts.followed_by;
    div.appendChild(divId);
    div.appendChild(imgPhoto);
    div.appendChild(divUser);
    div.appendChild(divFB);
    document.body.appendChild(div);
}
function teste(){
    sendReq();
}


//--------------------------------------------------------
