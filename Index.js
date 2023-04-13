//Ejercicio 1

const arrayAleatorio = [1, 5, 4 , 3, 2, 6];
arrayAleatorio.sort();
let lista = document.getElementById("listaOrdenada");

for (let i = 0; i < arrayAleatorio.length; i++) {

    let li = document.createElement("li");
    li.textContent = arrayAleatorio[i];
    lista.appendChild(li);

}

//////2.a///////
let array = [1, 2, 3, 4, 5, 6];
let i = 0;
while (i < array.length) {
    console.log(array[i]);
    i = i + 1;
}
//////2.b///////
for (i in array) {
    console.log(array[i]);
    i = i + 1;
}
//////2.c///////
array.forEach(function (i) {
    console.log(i)
})

//////2.d///////
for (e in array) {
    console.log(array[e] + 1);
    e = e + 1;
}

//////2.e///////
let array_mas_uno = array.map(elemento => elemento + 1);
console.log(array_mas_uno);


//////2.f///////
suma = 0
for (let a = 0; a < array.length; a++) {
    suma += array[a]
}
let promedio = suma / array.length
console.log(promedio)

// Ejercicio 3
const arrayAlCuadrado = [2,3,4,5,6,7];

for (var e = 0; e < arrayAlCuadrado.length; e++) {
    const resultadoAlCuadrado = arrayAlCuadrado.map(function(x) {
        return x ** 2;
    });
    console.log(resultadoAlCuadrado[e]);
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

//EJERCICIO 5

/////5.a////
let nombres = ["Florencia", "Lucas", "Ezequiel", "Matias", "Bruno", "Gustavo", "Martin"]
let mas_de_seis_letras = nombres.filter(elementos => nombres.length >= 6)
console.log(mas_de_seis_letras)
/////5.b////
Nombre_M = [];
for (let o = 0; o < nombres.length; o++) {
    if (nombres[o][0] === "M") {
        Nombre_M.push(nombres[o]);
    }
}
console.log(Nombre_M)

/////5.c////
nombres.sort(function (a, b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
});
console.log(nombres);

/////5.d////
let Inicial = nombres.map(nombres => nombres.charAt(0));
console.log(Inicial);

/////5.f////
Mayusculas = nombres.map(nombre => nombre.toUpperCase());

console.log(Mayusculas);

/////5.g////
let Nombres_J = nombres.some(nombre => nombre.charAt(0) == "J");
console.log(Nombres_J);

// Ejercicio 6
const coloresEnElArray = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];
let ingreseColor = prompt("Ingrese un color").toLowerCase();

if (coloresEnElArray.includes(ingreseColor)) {
    console.log(`${ingreseColor} esta en el array`);
} else {
    console.log(`${ingreseColor} no esta en el array`);
}

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

/////EJERCICIO 8////
function Vocales(array_palabras) {
    let array_vocales = [];
    for (let i = 0; i < array_palabras.length; i++) {
        let Letra = array_palabras[i][0].toLowerCase();
        if (Letra === "a" || Letra === "e" || Letra === "i" || Letra === "o" || Letra === "u") {
            array_vocales.push(array_palabras[i]);
        }
    }
    return array_vocales;
}
let palabras = ["oro", "martillo", "mesa", "octubre", "disco", "esmeralda", "Messi"];
let palabrasVocales = Vocales(palabras);
console.log(palabrasVocales);

// Ejercicio 9
const posiciones = [1,2,3,4,5];
let aux = "";

const intercambiar = (arr, i1, i2) => {
    aux = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = aux;
    return arr;
};

let resulIntercambiar = intercambiar(posiciones, 1, 2);
console.log(resulIntercambiar);

//Ejercicio 10

let colorTabla = document.querySelector('.colorTabla');

colorTabla.addEventListener('click', function() {

    this.style.backgroundColor = "blue";

});

////EJERCICIO 11//////
function ocultar(elemento) {
    elemento.style.display = "none";
}

// Ejercicio 12
let cambiarColorfila1Ej12 = document.getElementById("fila1Ej12");
let cambiarColorfila2Ej12 = document.getElementById("fila2Ej12");
let cambiarColorfila3Ej12 = document.getElementById("fila3Ej12");
let colores = ["red", "blue", "green", "white", "orange"];

function cambiarColor2 () {
    cambiarColorfila1Ej12.addEventListener("click", f => {
        let color = "";
        for (let t = 0; t < 6; t++) {
            color += colores[randomNumber2()];
            cambiarColorfila1Ej12.style.backgroundColor = color;
        }
    })
    cambiarColorfila2Ej12.addEventListener("click", f => {
        let color = "";
        for (let t = 0; t < 6; t++) {
            color += colores[randomNumber2()];
            cambiarColorfila2Ej12.style.backgroundColor = color;
        }
    })
    cambiarColorfila3Ej12.addEventListener("click", f => {
        let color = "";
        for (let t = 0; t < 6; t++) {
            color += colores[randomNumber2()];
            cambiarColorfila3Ej12.style.backgroundColor = color;
        }
    })
}

function randomNumber2() {
    return Math.floor(Math.random() * colores.length);
}

cambiarColor2();


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

/////EJERCICIO 14////
let tabla = document.querySelector("#Tabla_1");
let boton = document.querySelector("#boton");

boton.addEventListener('click', () => {
    let celdas = tabla.querySelectorAll("td");
    celdas.forEach(celda => celda.textContent = "-");
});

// Ejercicio 15
let hipervinculo = document.getElementById("hipervinculo");
let botonYoutube = document.getElementById("botonYoutube");
let botonInstagram = document.getElementById("botonInstagram");
let botonFacebook = document.getElementById("botonFacebook");

function cambiarVinculo () {
    botonYoutube.addEventListener("click", function() {
        hipervinculo.setAttribute("href", "https://www.youtube.com/@argentinaprograma4.0/featured");
        hipervinculo.innerHTML = "Argentina Programa 4.0 en Youtube";
    })
    botonInstagram.addEventListener("click", function() {
        hipervinculo.setAttribute("href", "https://www.instagram.com/argentinaprograma4.0/");
        hipervinculo.innerHTML = "Argentina Programa 4.0 en Instagram";
    })
    botonFacebook.addEventListener("click", function() {
        hipervinculo.setAttribute("href", "https://www.facebook.com/profile.php?id=100084956654182");
        hipervinculo.innerHTML = "Argentina Programa 4.0 en Facebook";
    })
}

cambiarVinculo();


//Ejercicio 16

let desaparecer = document.querySelector('.desaparecer');

desaparecer.addEventListener('click', function() {

    this.style.opacity = "0";

});

/////EJERCICIO 17/////
function Cambiar_Color(element) {
    element.style.backgroundColor = "yellow";
}

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

////EJERCICIO 20////
let enlace = document.getElementById("Contenido");

enlace.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(enlace.href);
});

// Ejercicio 21
let botonEnviar = document.getElementById("botonEnviar");
function formulario () {
    botonEnviar.addEventListener("click", function (g) {
        g.preventDefault();
        let textoAviso = document.getElementById("textoAviso");
        textoAviso.innerHTML += `<p>Se a enviado tu mensaje!</p>`;
        let reiniciar = document.getElementById("envioMensaje").reset();
    })
}

formulario();

