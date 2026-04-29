const express = require('express');
const router = express.Router();
const db = require('../db');



//mostrar todos los usuarios en raiz
router.get('/', (req, res) => {
    const query = 'SELECT * FROM users';
    db.query(query, (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: 'Error al obtener los usuarios' });
        } else {
            res.render('index', { users: results });
        }
    });
});

//agregar un nuevo usuario
router.post('/add', (req, res) => {
    const { name, email } = req.body; //extraer el nombre y correo del cuerpo de la solicitud
    const query = 'INSERT INTO users (nombre, correo) VALUES (?, ?)';//consulta SQL para insertar un nuevo usuario en la tabla users
    db.query(query, [name, email], (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: 'Error al agregar el usuario' });
            return res.send('Error al agregar el usuario');
        } else {
            res.redirect('/'); //redireccionar a la raiz para mostrar la lista actualizada de usuarios
        }
    });
});

//mostrat el formulario para editar un usuario
router.get('/edit/:id', (req, res) => {
    const userId = req.params.id; //extraer el id del usuario de los parametros de la ruta
    const query = 'SELECT * FROM users WHERE id = ?'; //consulta SQL para obtener los datos del usuario con el id especificado
    db.query(query, [userId], (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: 'Error al obtener el usuario' });
            return res.send('Error al obtener el usuario');
        } else {
            if (results.length > 0) {
                res.render('edit', { user: results[0] }); //renderizar la vista edit.ejs pasando los datos del usuario obtenido
            } else {
                res.status(404).json({ error: 'Usuario no encontrado' });
                return res.send('Usuario no encontrado');
            }
        }
    });
});

//actualizar los datos de un usuario
router.post('/update/:id', (req, res) => {
    const id = req.params.id; //extraer el id del usuario de los parametros de la ruta
    const { nombre, correo } = req.body; //extraer el nombre y correo del cuerpo de la solicitud
    const query = 'UPDATE users SET nombre = ?, correo = ? WHERE id = ?'; //consulta SQL para actualizar los datos del usuario con el id especificadoc
    db.query(query, [nombre, correo, id], (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: 'Error al actualizar el usuario' });
            return res.send('Error al actualizar el usuario');
        } else {
            res.redirect('/'); //redireccionar a la raiz para mostrar la lista actualizada de usuarios
        }
    });
});

//eliminar un usuario
router.get('/delete/:id', (req, res) => {
    const id = req.params.id; //extraer el id del usuario de los parametros de la ruta
    const query = 'DELETE FROM users WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: 'Error al eliminar el usuario' });
            return res.send('Error al eliminar el usuario');
        } else {
            res.redirect('/'); //redireccionar a la raiz para mostrar la lista actualizada de usuarios
        }
    });
});

//Exportar las rutas para que puedan ser utilizadas en app.js
module.exports = router;