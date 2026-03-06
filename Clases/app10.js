// Adivinar un numero aleatorio entre 1 y 10
// El usuario tiene 3 vidas
// Clase 2/3/26

// 1. Función corregida para generar el número aleatorio (min y max incluidos)
function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 2. Variables del juego
let numeroSecreto = generarNumeroAleatorio(1, 10);
let vidas = 3;
let adivinado = false;

console.log("Número secreto (para pruebas): " + numeroSecreto); // Para desarrollo

alert("¡Bienvenido! Adivina el número del 1 al 10. Tienes 3 vidas.");

// 3. Bucle del juego
while (vidas > 0 && !adivinado) {
    let intento = prompt("Te quedan " + vidas + " vidas. Ingresa un número:");

    // Convertir el texto a número
    intento = parseInt(intento);

    if (isNaN(intento)) {
        alert("Por favor, ingresa un número válido.");
        continue; // Salta esta iteración si no es número
    }

    if (intento === numeroSecreto) {
        alert("¡Felicidades! Adivinaste el número: " + numeroSecreto);
        adivinado = true;
    } else {
        vidas--;
        if (vidas > 0) {
            alert("Incorrecto. Intenta de nuevo. " + (intento < numeroSecreto ? "Más alto" : "Más bajo") + ".");
        } else {
            alert("Game Over. El número era: " + numeroSecreto);
        }
    }
}
