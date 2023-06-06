const profesoresModel = require('../models/profesoresModel');
// Función para visualizar todos los profesores
exports.getProfessors = async(req, res) => {
    // Evaluamos el bloque en un 'try'
    try {
        // Obtenemos los datos desde el modelo
        const profesores = await profesoresModel.getProfessors();
        res.status(200).json({
            success: true,
            profesores // Muestra los profesores si la operación sale bien.
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: 'Hubo un error al obtener los datos.',
            error: error // Muestra el error en caso de que la operación falle.
        })
    }
}

// Función para ver un profesor específico por su id
exports.getProfessorById = async(req, res) => {
    const idProfe = req.params.id; // Declaramos el id del modelo como una variable
    try {
        const profesor = await profesoresModel.getProfessorById(idProfe);
        if (!profesor) {
            res.status(404).json({
                success: false,
                msg: `No existe un profesor con id ${idProfe}`
            })
        }
        res.status(200).json({
            success: true,
            profesor // Muestra los datos del profesor si el id existe en la base de datos.
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: 'Hubo un error al obtener los datos.',
            error: error
        })
    }
}

// Función para agregar un profesor
exports.addProfessor = async(req, res) => {
    const profData = req.body; // Almacenamos los datos del modelo en una variable
    try {
        const profesor = await profesoresModel.addProfessor(profData);
        if (!profesor) {
            res.status(406).json({
                success: false,
                msg: 'No fue posible agregar un profesor'
            })
        }
        res.status(201).json({
            success: true,
            msg: 'Se ha agregado un profesor.'
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: 'Se produjo un error al obtener los datos.',
            error: error
        })
    }
}

// Función para actualizar los datos de un profesor existente.
exports.updateProfessor = async(req, res) => {
    const idProfe = req.params.id;
    const profData = req.body;
    const profesor = {
        idProfe,
        ...profData
    } // Almacenamos todos los datos del modelo en un objeto
    try {
        const listaActual = await profesoresModel.updateProfessor(profesor);
        if (!listaActual) {
            res.status(404).json({
                success: false,
                msg: 'No se actualizaron los datos del profesor.'
            })
        }
        res.status(200).json({
            success: true,
            msg: 'Se actualizaron los datos del profesor.',
            listaActual // Muestra los nuevos datos del profesor si la operación tiene éxito
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: 'Hubo un error al obtener los datos.',
            error: error
        })
    }
}

// Función que remueve un profesor de la base de datos.
exports.deleteProfessor = async(req, res) => {
    const idProfe = req.params.id;
    try {
        const profesor = await profesoresModel.deleteProfessor(idProfe);
        if (!profesor) {
            res.status(404).json({
                success: false,
                msg: `No existe un profesor con id ${idProfe}`
            })
        }
        res.status(200).json({
            success: true,
            msg: 'Se ha eliminado un profesor.'
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: 'Hubo un error al obtener los datos',
            error: error
        })
    }
}