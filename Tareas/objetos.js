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
   
};

console.log (alumno.educacion.primaria.hacerPipi());
console.log (alumno.educacion.primaria.jugar(" Pelota"));
console.log (alumno.educacion.secundaria.serRebeldes("platicar en el salon"))