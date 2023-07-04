const express = require('express');
const router = express.Router();
const cursosController = require('../controllers/cursosController');

const { validarCampos } = require('../middlewares/validar-campos');
const { check } = require('express-validator');
const { addCourse, updateCourse } = require('../models/cursosModel');

router.post('/',
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('descripcion', 'La descripción es obligatoria').not().isEmpty(),
        validarCampos
    ],
    addCourse
)

// Métodos para:
router.get('/', cursosController.getCourses); // Obtener todos los cursos
router.get('/:id', cursosController.getCourseById); // Obtener un curso por su ID
router.post('/', cursosController.addCourse); // Crear un curso
router.put('/:id', cursosController.updateCourse); // Actualizar un curso existente
router.delete('/:id', cursosController.deleteCourse); // Remover un curso
// Agregar un estudiante a un curso
router.post('/:id/estudiantes', cursosController.addStudentToCourse);
// Obtener los estudiantes de un curso según el ID de éste
router.get('/:id/estudiantes', cursosController.getCoursesStudents);
// Remover un estudiante de un curso
router.delete('/:id/estudiantes/:idEstudiante', cursosController.deleteStudentFromCourse);

module.exports = router;