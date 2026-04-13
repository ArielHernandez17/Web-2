function agregarPantalla(value) {
    document.getElementById("display").value += value;
}

function limpiarPantalla() {
    document.getElementById("display").value = "";
}

function calcularResultado() {
    const display = document.getElementById("display");
    try {
        // Solo evaluamos si hay texto en el display
        if (display.value.trim() !== "") {
            const resultado = eval(display.value);
            display.value = resultado;
        }
    } catch (error) {
        display.value = "Error";
        // Opcional: Limpiar el error después de 1.5 segundos
        setTimeout(() => limpiarPantalla(), 1500);
    }
}