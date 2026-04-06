/*
console.log(document.getElementById("titulo"));
//console.log(document.getElementById("titulo").textContent);
//console.log(document.getElementById("Titulo").innerText);

const titulo = document.getElementById("Titulo");
console.log(titulo);
titulo.innerText="Hola,Mundo ! Editado desde app2.js";

*/

let titulo = document.getElementById('miTitulo');
console.log(titulo);               // Ahora sí muestra el elemento, no null
console.log(titulo.innerText);     // "Hola mundo"