const frutas = [];

while (true) {
    let seleccionFruta = prompt("¿Qué compraste? ('salir' para terminar)");

    if (seleccionFruta === "salir" || seleccionFruta === null) {
        break;
    }

    let confirmar = confirm("¿Deseas agregar " + seleccionFruta + " a la lista?");
    
    if (confirmar) {
        frutas.push(seleccionFruta);
        console.log(seleccionFruta + " agregada.");
    }
}

console.log("Estas son las frutas:", frutas);