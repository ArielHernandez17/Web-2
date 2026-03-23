let productos=[
    {nombre: 'camisa',precio: 300 },
    {nombre: 'pantalon', precio: 500 },
    {nombre:'Zapatos', precio: 750},
    {nombre: 'Sombrero', precio: 350 }
];
 let carrito=[];

 function mostrarMenu(){
    let menu = "Selecione el producto a agregar \n";
    for (let i = 0; i< productos.length; i++){
        menu+=(i+1)+"."+productos[i].nombre+ "- $"+productos[i].precio;
    }
    menu += (productos.length+1)+".- Ver carrito y total\n";
    menu += (productos.length+2)+".-Salir";

    return menu;
    
 }

 function agregarCarrito(index){
    let productoseleccionado = productos[index];
    carrito.push(productoseleccionado);
    console.log("Producto"+productoseleccionado.nombre+"Agregar al carrito");
    console.log("Producto Agregado");
 }

function mostrarCarritoTotal(){
    if(carrito.length === 0){
        console.log("Carrito vacio");

    }else{
        let mensajeCarrito="carrito de compras\n";
        var total =0;
        for (let i=0; i<carrito.length;i++){
            mensajeCarrito+=(i+1)+" . "+carrito[i].nombre+"-"+carrito[i].precio;
            total+= carrito[i].precio;
        }               
        mensajeCarrito+="\nTotal: $"+total;
        console.log(mensajeCarrito);
    }
}
 
 let opcion;

 do{
    opcion = prompt(mostrarMenu());
    opcion = Number(opcion);

    if(isNaN(opcion || opcion<1 || opcion > productos.length + 2)){
        console.log("Opcion no valida");
    }else if (opcion>=1 && opcion <= productos.length){
        agregarCarrito(opcion - 1);
    }else if(opcion === productos.length+1){
        mostrarCarritoTotal();
    }

 }while(opcion !== productos.length +2);
 console.log ("Gracias por su visita");
