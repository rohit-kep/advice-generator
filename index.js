var request = new XMLHttpRequest();
var button = document.getElementById("randomgenrator");
var random = document.getElementById("random")
var maincontent = document.getElementById("mainContent");


request.open("GET",'https://api.adviceslip.com/advice',true);

request.onload = function(){
    var data = JSON.parse(this.response);

    if(request.status >=200 &&  request.status <400){
         let str = random.textContent;
         random.textContent = str + String(data.slip.id);
         maincontent.textContent = '"'+data.slip.advice+'"';

    }else{
        console.log("error");
    }
}

button.onclick=function(){
 console.log("work plx");
}

    request.send();

