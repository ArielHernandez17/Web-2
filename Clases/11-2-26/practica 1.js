/* confirm verdadero o falso
if(confirm("Eres estudiante")){
    console.log("Pasa");
}else{
    console.log("Tienes que registrarte")
}
    */
/*primer intento
const fruta=[];
const seleccionfrutas = parseInt(prompt("Que fruta desea"));

//fruta.push (seleccionfrutas);//
console.log ("Estas son tus frutas "+seleccionfrutas);
*/

const frutas = [];


    let seleccionFruta = prompt("¿Qué compraste?");

    if (seleccionFruta) {
        let confirmar = confirm(`¿Deseas agregar ${seleccionFruta} a la lista?`);
        
        if (confirmar) {
            frutas.unshift(seleccionFruta);
            console.log(seleccionFruta + " agregada.");
        } 
    }



console.log("Estas son las frutas", frutas);

