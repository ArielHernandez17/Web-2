//cargamos las variables de entorno de nuestro archivo .env
require('dotenv').config();

//importamos el modulo de mysql2
const mysql = require('mysql2');

//creamos la conexion a la base de datos utilizando las variables de entorno
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

//mensaje de conexion exitosa o error
connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conexión a la base de datos exitosa');
});

//exportamos la conexion para usarla en otros archivos
module.exports = connection;
