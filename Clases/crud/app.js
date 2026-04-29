//Cargar variables de entorno para la conexion de la aplicacion requiere el modulo dotenv
require('dotenv').config();
//importamos el modulo express para crear el servidor
const express = require('express');
//importamos el modulo de patch para manejar las rutas de la aplicacion
const path = require('path');

//crear una insttancia de express
const app = express();

//importamos el archivo de rutas donde se maneja la logica para el crud
const userRoutes = require('./routes/users');

//configurar el motor de plantillas ejs para renderizar las vistas
app.set('views engine', 'ejs');
app.set('view engine', 'ejs'); // Corregido: era 'view engine', no 'views engine'

//configurar la carpeta de vistas para que express pueda encontrar los archivos ejs
app.set('views', path.join(__dirname, 'views'));

//configurar el middleware para parsear el cuerpo de las solicitudes en formato json
app.use(express.static(path.join(__dirname, 'public')));
//configurar el middleware para parsear el cuerpo de las solicitudes en formato unlencoded
app.use(express.urlencoded({ extended: false }));

//midleware para manejar las rutas de la aplicacion
app.use('/', userRoutes);

//iniciar el servidor en el puerto especificado en las variables de entorno
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto http://localhost:${PORT}`);
});