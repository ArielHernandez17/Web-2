const numeroSecreto = Math.floor(Math.random() * 10) + 1;

const intentoUsuario = parseInt(prompt("Adivina el número secreto (entre 1 y 10):"));

console.log("Tu número: " + intentoUsuario);
console.log("El numero era: " + numeroSecreto);

if (intentoUsuario === numeroSecreto) {
    console.log("Adivinaste :D");
} else {
    console.log("No es el número correcto :c");
}