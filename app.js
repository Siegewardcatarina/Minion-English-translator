var btn = document.querySelector("#btn-primary");
var txt = document.querySelector("#txt-input");
var out = document.querySelector("#output");

function clickeventhandler() {
    out.innerText = "Translated " + txt.value;
}

btn.addEventListener("click",clickeventhandler);