const express = require('express');
const router = express.Router();
const estudiantesController = require('../controllers/estudiantesController');

const { validarCampos } = require('../middlewares/validar-campos');
const { check } = require('express-validator');
const { addStudent, updateStudent } = require('../models/estudiantesModel');

<<<<<<< HEAD
// Validaciones del método POST
=======
>>>>>>> 80bab290aa7c1817c80907cc617c0fc7dedc3e8c
router.post('/',
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('nombre', 'El nombre solo debe contener letras').isString(),
        check('edad', 'La edad debe ser obligatoria').not().isEmpty(),
        check('edad', 'La edad debe ser numérica').isNumeric(),
        check('grado', 'El grado es obligatorio').not().isEmpty(),
        check('grado', 'El grado debe ser una cadena de caracteres').isString(),
        validarCampos
    ],
    addStudent
)
<<<<<<< HEAD
// Validaciones del método PUT
router.put('/',
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('nombre', 'El nombre solo debe contener letras').isString(),
        check('edad', 'La edad debe ser obligatoria').not().isEmpty(),
        check('edad', 'La edad debe ser numérica').isNumeric(),
        check('grado', 'El grado es obligatorio').not().isEmpty(),
        check('grado', 'El grado debe ser una cadena de caracteres').isString(),
        validarCampos
    ],
    updateStudent
)
=======
>>>>>>> 80bab290aa7c1817c80907cc617c0fc7dedc3e8c

// Métodos para:
router.get('/', estudiantesController.getStudents); // Obtener todos los estudiantes
router.get('/:id', estudiantesController.getStudentById); // Obtener un estudiante por su ID
router.post('/', estudiantesController.addStudent); // Crear un estudiante
router.put('/:id', estudiantesController.updateStudent); // Actualizar un estudiante existente
router.delete('/:id', estudiantesController.deleteStudent); // Remover un estudiante
// Obtener los cursos de un estudiante según el ID de éste
router.get('/:id/cursos', estudiantesController.getStudentsCourses);

module.exports = router;