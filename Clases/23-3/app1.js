function MostrarMenu(){
    let opcion;
    do{
        opcion = prompt(
            `opciones disponibles
            1.-Agregar nombre
            2.-Mostrar nombre 
            3.-Salir
            "Elegir opcion"
            `);
            switch(opcion){
                case '1':
                    agregarNombre();
                    break;
                case '2':
                    mostrarNombres();
                    break;
                case '3':
                    alert("saliendo del programa");
                    break;
                default:
                    alert("Opcion no valida.Intentar nuevamente");

            }
    }while(opcion !== '3')
}

//inicilizamos
let nombres = [];

function agregarNombre(){
    let nombre = prompt ("Ingresa tu nombre");
    if(nombre){
        nombres.push(nombre);
        alert(`!Elnombre : ${nombre} agregado exitosamente`)
    }else{
        alert("El campo no puede estar vacio");
    }
}

//funcion para mostrar nombres
function mostrarNombres() {
    if(nombres.length === 0){
        alert("Arreglo esta vacio, \n no tenemos nombres");
    }else{
        let mensaje = "Nombres almecenados \n";
        nombres.forEach((nombre,indice)=>{
                mensaje+= `${indice + 1} . ${nombre}\n`;
        });
        alert(mensaje);
    }
}