var btn = document.querySelector("#btn-primary");
var txt = document.querySelector("#txt-input");

function clickeventhandler() {
    console.log("clicked!"); 
    console.log("input", txt.value);
 }

btn.addEventListener("click",clickeventhandler);