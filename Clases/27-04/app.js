const express = require('express'); //manda a llamar el modulo express
const path = require('path'); //modulo para manejar rutas de archivos
const pagesRoutes = require('./routes/pages'); //manda a llamar las rutas definidas en el archivo pages.js

const app = express(); //crea una instancia de la aplicación express
const PORT = 3000; //define el puerto en el que se ejecutará el servidor

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static('public'));

//routes para paginas principales
app.use('/', pagesRoutes);

//configuracion de pagina principal
app.get('/', (req, res) => {
    res.redirect('/page1');
});

//start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});