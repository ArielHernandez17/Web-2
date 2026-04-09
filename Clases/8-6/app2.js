document.getElementById("CalculadoraForm").addEventListener("submit", 
    function(event) {
    event.preventDefault(); // Evita que el formulario se envíe y recargue la página

    const numero1 = parseFloat(document.getElementById("num1").value);
    const numero2 = parseFloat(document.getElementById("num2").value);
    const operacion = document.getElementById("operacion").value;

    let resultado;
    switch(operacion) {
        case "Suma":
            resultado = numero1 + numero2;
            break;
        case "Resta":
            resultado = numero1 - numero2;
            break;
        case "Multiplicacion":
            resultado = numero1 * numero2;
            break;
        case "Division":
            resultado = numero1 / numero2;
            break;
        default:
            resultado = "Operación no válida";
    }
 


    document.getElementById("resultado").textContent = "Resultado: " + resultado;

    });