var btn = document.querySelector(".btn-primary");
var txt = document.querySelector('#txt-input');
console.log(txt);
btn.addEventListener("click",function click(){
    console.log("clicked");
    console.log('input',txt.value);
})