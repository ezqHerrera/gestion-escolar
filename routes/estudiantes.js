const express = require('express');
const router = express.Router();
const estudiantesController = require('../controllers/estudiantesController');
const connection = require('../config/db');

const { validarCampos } = require('../middlewares/validar-campos');
const { check } = require('express-validator');
const { getStudents, getStudentById, addStudent, updateStudent, deleteStudent, getStudentsCourses } = require('../models/estudiantesModel');

const { escapeRegExp } = require('escape-string-regexp');

// Ruta para buscar registros con expresiones regulares
router.get('/buscar', (req, res) => {
    const searchTerm = req.params.busqueda; // Término de búsqueda
    const tabla = req.params.tabla;

    // Escapa caracteres especiales en el término de búsqueda
    const escapedTerm = escapeRegExp(searchTerm);

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
        check('edad', 'La edad debe ser obligatoria').not().isEmpty(),
        check('edad', 'La edad debe ser numérica').isNumeric,
        check('grado', 'El grado es obligatorio').not().isEmpty,
        check('grado', 'El grado debe ser una cadena de caracteres').isString,
        validarCampos
    ],
    addStudent
)

// Métodos para:
router.get('/', estudiantesController.getStudents); // Obtener todos los estudiantes
router.get('/:id', estudiantesController.getStudentById); // Obtener un estudiante por su ID
router.post('/', estudiantesController.addStudent); // Crear un estudiante
router.put('/:id', estudiantesController.updateStudent); // Actualizar un estudiante existente
router.delete('/:id', estudiantesController.deleteStudent); // Remover un estudiante
// Obtener los cursos de un estudiante según el ID de éste
router.get('/:id/cursos', estudiantesController.getStudentsCourses);

module.exports = router;