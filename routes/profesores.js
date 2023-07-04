const express = require('express');
const router = express.Router();
const profesoresController = require('../controllers/profesoresController');
const connection = require('../config/db');

const { validarCampos } = require('../middlewares/validar-campos');
const { check } = require('express-validator');
const { getProfessors, getProfessorById, addProfessor, updateProfessor, deleteProfessor } = require('../models/profesoresModel');

const { escapeRegExp } = require('escape-string-regexp');

// Ruta para buscar registros con expresiones regulares
router.get('/buscar', (req, res) => {
    const searchTerm = req.params.busqueda; // Término de búsqueda
    const tabla = req.params.tabla;

    // Escapa caracteres especiales en el término de búsqueda
    const escapedTerm = escapeRegExp(escapedTerm);

    const sql = `SELECT * FROM '${tabla}' WHERE nombre REGEXP '${escapedTerm}'`;

    connection.query(sql, (error, results) => {
        if (error) {
            console.error('Error en la consulta', error);
            res.status(500).json({ error: 'Error en la consulta' });
        } else {
            console.log('Resultados: ', results);
            // Devuelve los resultados como respuesta JSON
            res.json(results);
        }
    });
});

router.post('/',
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('especialidad', 'La especialidad es obligatoria').not().isEmpty(),
        check('email', 'El email es inválido').isEmail(),
        validarCampos
    ],
    addProfessor
)

// Métodos para:
router.get('/', profesoresController.getProfessors); // Obtener todos los profesores
router.get('/:id', profesoresController.getProfessorById); // Obtener un profesor por su ID
router.post('/', profesoresController.addProfessor); // Crear un profesor
router.put('/:id', profesoresController.updateProfessor); // Actualizar un profesor existente
router.delete('/:id', profesoresController.deleteProfessor); // Remover un profesor

module.exports = router;