const express = require('express');
const router = express.Router();
const profesoresController = require('../controllers/profesoresController');

// Métodos para:
router.get('/', profesoresController.getProfessors); // Obtener todos los profesores
router.get('/:id', profesoresController.getProfessorById); // Obtener un profesor por su ID
router.post('/', profesoresController.addProfessor); // Crear un profesor
router.put('/:id', profesoresController.updateProfessor); // Actualizar un profesor existente
router.delete('/:id', profesoresController.deleteProfessor); // Remover un profesor

module.exports = router;