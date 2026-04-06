const boton = document.querySelector('#boton');
const parrafo = document.querySelector('#Parrafo');

boton.addEventListener('click',() => {
    parrafo.textContent= 'Hola mundo' ;
});