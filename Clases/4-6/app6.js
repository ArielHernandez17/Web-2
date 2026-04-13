// Seleccionamos la lista del HTML
const listaDinamica = document.querySelector("#lista");

// 1. Pedimos al usuario la cantidad de elementos
// Usamos prompt por simplicidad, o podrías usar un input de HTML
const cantidad = prompt("¿Cuántos elementos quieres agregar a la lista?");

// Convertimos el texto ingresado a un número entero
const numeroElementos = parseInt(cantidad);

// 2. Verificamos que sea un número válido
if (!isNaN(numeroElementos) && numeroElementos > 0) {
    
    // 3. Ciclo para generar los elementos
    for (let i = 1; i <= numeroElementos; i++) {
        // Creamos un nuevo elemento <li>
        const nuevoItem = document.createElement("li");
        
        // Le asignamos texto
        nuevoItem.textContent = `Elemento dinámico ${i}`;
        
        // Lo agregamos a la lista que seleccionamos al inicio
        listaDinamica.appendChild(nuevoItem);
    }

} else {
    alert("Por favor, ingresa un número válido.");
}