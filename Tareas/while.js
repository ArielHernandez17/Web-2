var numero = 7;

var multiplicador = 1;

console.log("---Tabla del " + numero + " ---");

while (multiplicador <= 10) {
    var resultado = numero * multiplicador;
    
    console.log(numero + " x " + multiplicador + " = " + resultado);
    
    multiplicador++; 
}