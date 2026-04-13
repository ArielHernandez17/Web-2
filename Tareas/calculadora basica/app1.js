document.getElementById("SumForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operacion = document.getElementById("operacion").value;
    const resultDiv = document.getElementById("result");

    let resultado;
    let simbolo;

    switch (operacion) {
        case "suma":
            resultado = num1 + num2;
            simbolo = "+";
            break;
        case "resta":
            resultado = num1 - num2;
            simbolo = "-";
            break;
        case "multi":
            resultado = num1 * num2;
            simbolo = "×";
            break;
        case "divi":
            if (num2 === 0) {
                resultDiv.innerHTML = "❌ No se puede dividir por cero";
                return;
            }
            resultado = num1 / num2;
            simbolo = "÷";
            break;
    }

    resultDiv.innerHTML = `Resultado: ${num1} ${simbolo} ${num2} = ${resultado}`;
});