const cursosModel = require('../models/cursosModel');
// Función para visualizar todos los cursos
exports.getCourses = async(req, res) => {
    // Evaluamos el bloque en un 'try'
    try {
        // Obtenemos los datos desde el modelo
        const cursos = await cursosModel.getCourses();
        res.status(200).json({
            success: true,
            cursos // Muestra los profesores si la operación sale bien.
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: 'Hubo un error al obtener los datos.',
            error: error // Muestra el error en caso de que la operación falle.
        })
    }
}

// Función para ver un curso específico por su id
exports.getCourseById = async(req, res) => {
    const idCurso = req.params.id; // Declaramos el id del modelo como una variable
    try {
        const curso = await cursosModel.getCourseById(idCurso);
        if (!curso) {
            res.status(406).json({
                success: false,
                msg: `No existe un curso con id ${idCurso}`
            })
        }
        res.status(200).json({
            success: true,
            curso // Muestra los datos del curso si el id existe en la base de datos.
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: 'Hubo un error al obtener los datos.',
            error: error
        })
    }
}

// Función para agregar un curso
exports.addCourse = async(req, res) => {
    const dataCurso = req.body; // Almacenamos los datos del modelo en una variable
    try {
        const curso = await cursosModel.addCourse(dataCurso);
        if (!curso) {
            res.status(406).json({
                success: false,
                msg: 'No se pudo agregar un curso'
            })
        }
        res.status(201).json({
            success: true,
            msg: 'Curso agregado con éxito.'
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: 'Se produjo un error al obtener los datos.',
            error: error
        })
    }
}

// Función que actualiza los datos de un curso existente.
exports.updateCourse = async(req, res) => {
    const idCurso = req.params.id;
    const dataCurso = req.body;
    const curso = {
        idCurso,
        ...dataCurso
    } // Almacenamos todos los datos del modelo en un objeto
    try {
        const updatedCourse = await cursosModel.updateCourse(curso);
        if (!updatedCourse) {
            res.status(404).json({
                success: false,
                msg: 'No se actualizaron los datos del curso'
            })
        }
        res.status(200).json({
            success: true,
            msg: 'Se actualizaron los datos del curso con éxito',
            updatedCourse // Muestra los nuevos datos del curso si la operación tiene éxito
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: 'Se produjo un error al obtener los datos',
            error: error
        })
    }
}

// Función que remueve un curso de la base de datos.
exports.deleteCourse = async(req, res) => {
    const idCurso = req.params.id;
    try {
        const curso = await cursosModel.deleteCourse(idCurso);
        if (!curso) {
            res.status(404).json({
                success: false,
                msg: `El curso con id ${idCurso} no existe`
            })
        }
        res.status(200).json({
            success: true,
            msg: 'Se ha eliminado un curso.'
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: 'Hubo un error al obtener los datos.',
            error: error
        })
    }
}

// Función que añade un estudiante a un curso.
exports.addStudentToCourse = async(req, res) => {
    const idNumbers = req.body; // Pedimos los IDs de ambas tablas.
    try {
        const student = await cursosModel.addStudentToCourse(idNumbers);
        if (!student) {
            res.status(404).json({
                success: false,
                msg: 'No se pudo agregar al estudiante al curso'
            })
        }
        res.status(201).json({
            success: true,
            msg: 'Se agregó un estudiante al curso'
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: 'Hubo un error al obtener los datos',
            error: error
        })
    }
}

// Función que obtiene los estudiantes de un curso.
exports.getCoursesStudents = async(req, res) => {
    const idStudents = req.params.id; // Pedimos el id de los estudiantes
    try {
        const studentsCurso = await cursosModel.getCoursesStudents(idStudents);
        if (!studentsCurso) {
            res.status(404).json({
                success: false,
                msg: 'No se encontraron los datos del curso'
            })
        }
        res.status(200).json({
            success: true,
            studentsCurso
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: 'Hubo un error al obtener los datos',
            error: error
        })
    }
}

// REVISAR
exports.deleteStudentFromCourse = async(req, res) => {
    const ides = req.body;
    try {
        const estudiante = await cursosModel.deleteStudentFromCourse(ides);
        if (!estudiante) {
            res.status(404).json({
                success: false,
                msg: 'No se encontró un estudiante'
            })
        }
        res.status(200).json({
            success: true,
            msg: 'Se eliminó al estudiante del curso'
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: 'Hubo un error al obtener los datos',
            error: error
        })
    }
}