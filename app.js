var btn = document.querySelector("#btn-primary");
var txt = document.querySelector("#txt-input");
var out = document.querySelector("#output");

var serverurl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function geturl(text)
{
    return serverurl + '?' + 'text=' + text;
}

function errorhandler()
{
    console.log("An error occured, please try again in a while");
    alert("An error occured, please try again in a while");
}

function clickeventhandler(){
    var inputtxt = txt.value;
    fetch(geturl(inputtxt))
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(errorhandler)
}
btn.addEventListener("click",clickeventhandler);