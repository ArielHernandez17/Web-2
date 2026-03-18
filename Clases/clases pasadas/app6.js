//clase del 2/3/26
let opcionUser = prompt(`
    Elija una opcion:
    1:libros
    2:Peliculas
    3:Juegos
    
`);

switch (opcionUser){
    case "1":
        console.log("1984");
        break;
    case "2":
        console.log("Matrix");
        break;
    case "3":
        console.log("Minecraft");
        break;
    default:
        console.log("NO valido");
        
}


