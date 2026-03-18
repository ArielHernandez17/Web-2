/*
var miCarro = new Object();
miCarro.marca='ford';
miCarro.modelo='fiesta';
miCarro.anio=2017;

console.log(miCarro);

var miCarro={
    marca:'ford',
    modelo:'fiesta',
    anio: 2018
}

console.log (miCarro);
*/

const alumno ={
    id:4541251452,
    nombre:'Ariel',
    primerApellido:'Hernandez',
    segundoApellido:'Velazquez',
    numcontacto:[ 567886952972,56262656 ],
    direccion:{
        calle:'mirador',
        numero: 15,
        Colonia: 'benito juarez',
        alcaldia: 'benito',


    },
    educacion:{
        primaria:{
            nombre:"Charles Bell",
            publica: true,
            tiemporecreo:'40m',
            jugar:function(tipojuego){
                console.log("jugando"+tipojuego);

            },
            hacerPipi: function(){
                console.log("Me mie unu");
            }

        },
        secundaria:{
            nombre:"IPE",
            privada: true,
            pubertos: true,
            serRebeldes: function(accion){
                console.log("Me sonaron por "+ accion)
            }

        }
    },
    
    actividadesPersonales: {
        Juego:'The last of us part 2',
        fisica:'correr',
        actividadCotidiana (actividad){
            return `${this.fisica} en el horario de ${actividad}` ;
        }
    }
        
};

console.log (alumno.actividadesPersonales.actividadCotidiana("7am"));
console.log (alumno.educacion.primaria.hacerPipi());
console.log (alumno.educacion.primaria.jugar(" Pelota"));
console.log (alumno.educacion.secundaria.serRebeldes("platicar en el salon"))


console.log(alumno.hasOwnProperty("numeroCuenta"));
console.log(alumno.hasOwnProperty("Nombre"))

console.log(alumno);
//crear
alumno.numeroCuenta=56268625;
//leer
console.log(alumno[ 'numeroCuenta']);
//actualizar
alumno.nombre="Aron";
console.log (alumno[ 'nombre' ]);
//eliminar
delete alumno.segundoApellido;

console.log(alumno);
