const express = require('express');
const router = express.Router();
const estudiantesController = require('../controllers/estudiantesController');

// Métodos para:
router.get('/', estudiantesController.getStudents); // Obtener todos los estudiantes
router.get('/:id', estudiantesController.getStudentById); // Obtener un estudiante por su ID
router.post('/', estudiantesController.addStudent); // Crear un estudiante
router.put('/:id', estudiantesController.updateStudent); // Actualizar un estudiante existente
router.delete('/:id', estudiantesController.deleteStudent); // Remover un estudiante
// Obtener los cursos de un estudiante según el ID de éste
router.get('/:id/cursos', estudiantesController.getStudentsCourses);

module.exports = router;