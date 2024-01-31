let body = document.getElementById("body");

let boton = document.querySelector(".boton");
let textoPrincipal = document.querySelector('.explainer');
let texto = document.getElementsByClassName('text');
let icono = document.querySelector('.icono1');
let icono2 = document.querySelector('.icono2');

console.log(icono)
boton.addEventListener('click', ()=>{
    document.body.classList.toggle('white')
    textoPrincipal.classList.toggle('black')
    for(element of texto){
        element.classList.toggle('negro')
    }
    icono.classList.toggle('cambiar')
    icono2.classList.toggle('cambiar2')
   
})

let sonido = new Audio();
sonido.src = './sonido/click2.mp3'