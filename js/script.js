/*button click show hide navbar*/
var togglebtn=document.querySelector(".togglebtn");
var nav=document.querySelector(".nav-links");
var links=document.querySelector(".nav-links li");

togglebtn.addEventListener("click", function () {
    this.classList.toggle("click")
    nav.classList.toggle("open")
})

var typed=new Typed(".input",{
    Strings:["Frontend Developer","Web App Developer","Web Developer"],
    typedSpeed:70,
    backSpeed:55,
    loop:true
})