//importamos express
const express = require('express');
//manejo de redirecciones para las paginas
const path = require('path');
//manejo de rutas para las paginas
const router = express.Router();

router.get('/page1', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'page1.html'));
});

router.get('/page2', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'page2.html'));
});

module.exports = router;