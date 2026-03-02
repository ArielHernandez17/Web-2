//Arreglos
let frutas = ["manzana","cereza", "Aguacate"];
/*
    console.log(frutas);
    console.log("---------------")
    console.log(frutas.length) //la longitud del arreglo
    console.log("---------")
    console.log(frutas[2]); //imprimir de un indice
    console.log(frutas[12]);
*/
/*
for (let inicio = 0;inicio < frutas.length ; inicio ++) {
    console.log(frutas[inicio]);
}
    */

for (let fruta of frutas){
    console.log(fruta);
}

for (let fruta in frutas){
    console.log(fruta);
}