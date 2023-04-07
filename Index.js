//Ejercicio 1

const arrayAleatorio = [1, 5, 4 , 3, 2, 6];
arrayAleatorio.sort();
let lista = document.getElementById("listaOrdenada");

for (let i = 0; i < arrayAleatorio.length; i++) {

    let li = document.createElement("li");
    li.textContent = arrayAleatorio[i];
    lista.appendChild(li);

}

//Ejercicio 4

const arrayParaSumarPositivos = [ 1, -4, 12, 0, -3, 29, -150];

function sumarPositivos(arrayParaSumarPositivos){

    let suma = 0;

    for(let i = 0; i < arrayParaSumarPositivos.length; i++) {

        if(arrayParaSumarPositivos[i] > 0){

            suma += arrayParaSumarPositivos[i];

        }

    }

    return suma;

}

console.log("El resultado de los numeros positivos sumados es: ",sumarPositivos(arrayParaSumarPositivos));

//Ejercicio 7

const arrayConNumerosParesEImpares = [2, 4, 3, 1, 8, 9, 7];
const arrayConNumerosPares = [];

function identificarPares(arrayConNumerosParesEImpares){

    for(let i = 0; i < arrayConNumerosParesEImpares.length; i++){

        if(arrayConNumerosParesEImpares[i] % 2 == 0){

            arrayConNumerosPares.push(arrayConNumerosParesEImpares[i]);

        }

    }

    return arrayConNumerosPares;

}

console.log(identificarPares(arrayConNumerosParesEImpares));

//Ejercicio 10

let colorTabla = document.querySelector('.colorTabla');

colorTabla.addEventListener('click', function() {

    this.style.backgroundColor = "blue";

});

//Ejercicio 13

function cambiarTamaño(noticia1) {

    let div = document.querySelector("." + noticia1);
    let fontSize = window.getComputedStyle(div, null).getPropertyValue("font-size");
    let newFontSize = parseInt(fontSize) + 2 + "px";
    div.style.fontSize = newFontSize;

}

document.getElementById('btn1').addEventListener('click', function() {

    cambiarTamaño("noticia1");

});

document.getElementById('btn2').addEventListener('click', function() {

    cambiarTamaño("noticia2");

});

document.getElementById('btn3').addEventListener('click', function() {

    cambiarTamaño("noticia3");

});

//Ejercicio 16

let desaparecer = document.querySelector('.desaparecer');

desaparecer.addEventListener('click', function() {

    this.style.opacity = "0";

});

//Ejercicio 18

let celda1 = document.getElementById("celda1");
let celda2 = document.getElementById("celda2");
let celda3 = document.getElementById("celda3");
let celda4 = document.getElementById("celda4");

celda1.addEventListener('mouseenter', function() {

    celda1.style.backgroundColor = "red";

});

celda1.addEventListener('mouseleave', function() {

    celda1.style.backgroundColor = "";

});

celda2.addEventListener('mouseenter', function() {

    celda2.style.backgroundColor = "red";

});

celda2.addEventListener('mouseleave', function() {

    celda2.style.backgroundColor = "";

});

celda3.addEventListener('mouseenter', function() {

    celda3.style.backgroundColor = "red";

});

celda3.addEventListener('mouseleave', function() {

    celda3.style.backgroundColor = "";

});

celda4.addEventListener('mouseenter', function() {

    celda4.style.backgroundColor = "red";

});

celda4.addEventListener('mouseleave', function() {

    celda4.style.backgroundColor = "";

});

//Ejercicio 19

let div = document.getElementById('redimensionar');

let normal = false;

div.addEventListener("dblclick", function(){

    if(normal){

        div.style.width = "800px";
        div.style.height = "70px";
        normal = false;

    }else{

        div.style.width = "250px";
        div.style.height = "250px";
        normal = true;

    }

});
