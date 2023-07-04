const express = require('express');
const router = express.Router();
const profesoresController = require('../controllers/profesoresController');

const { validarCampos } = require('../middlewares/validar-campos');
const { check } = require('express-validator');
const { addProfessor, updateProfessor } = require('../models/profesoresModel');

router.post('/',
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('nombre', 'El nombre debe ser una cadena de caracteres').isString(),
        check('especialidad', 'La especialidad es obligatoria').not().isEmpty(),
        check('especialidad', 'La especialidad debe ser una cadena de caracteres').isString(),
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
router.delete('/:id', profesoresController.deleteProfessor); // Quitar un profesor

module.exports = router;