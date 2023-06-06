const estudiantesModel = require('../models/estudiantesModel');
// Obtener todos los estudiantes
exports.getStudents = async(req, res) => {
    try {
        // Obtenemos los datos desde el modelo
        const estudiantes = await estudiantesModel.getStudents();
        // Si no hay ningún problema, respondemos con los estudiantes del lado del cliente
        res.status(200).json({
            success: true,
            data: estudiantes
        })
    } catch (error) {
        // En caso de que las instrucciones anteriores fallen capturamos el error,
        // lo mostramos por consola y enviamos un mensaje al respecto
        console.error(error);
        res.status(500).json({
            success: false,
            msg: 'Hubo un error al obtener los datos'
        })
    }
}

// Función que obtiene un estudiante según su id
exports.getStudentById = async(req, res) => {
    const idStudent = req.params.id; // pedimos la id del estudiante
    try {
        // Le decimos al modelo que realice la operación en la base de datos
        const student = await estudiantesModel.getStudentById(idStudent);
        if (!student) {
            res.status(404).json({
                success: false,
                msg: `No existe un estudiante con id ${idStudent}`
            })
        }
        // Mostramos los datos del estudiante si la operación tiene éxito
        res.status(200).json({
            success: true,
            student
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            msg: 'Hubo un error al obtener los datos'
        })
    }
}

// Función que añade un estudiante
exports.addStudent = async(req, res) => {
    const studentData = req.body; // Almacenamos los datos del modelo en una variable
    try {
        const estudiante = await estudiantesModel.addStudent(studentData);
        if (!estudiante) {
            res.status(406).json({
                success: false,
                msg: 'No se pudo agregar un estudiante.'
            })
        }
        res.status(201).json({
            success: true,
            msg: 'Estudiante agregado con éxito.'
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: 'Hubo un error al obtener los datos.',
            error: error
        })
    }
}

// Función para actualizar los datos de un estudiante
exports.updateStudent = async(req, res) => {
    const idStudent = req.params.id;
    const dataStudent = req.body;
    const student = {
        idStudent,
        ...dataStudent
    } // Almacenamos todos los datos del modelo en un objeto
    try {
        const listaActual = await estudiantesModel.updateStudent(student);
        if (!listaActual) {
            res.status(404).json({
                success: false,
                msg: 'No se actualizaron los datos del estudiante'
            })
        }
        res.status(200).json({
            success: true,
            msg: 'Se actualizaron los datos.',
            listaActual // Muestra los nuevos datos del estudiante si la operación tiene éxito
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: 'Hubo un error al obtener los datos.',
            error: error
        })
    }
}

// Función que remueve un estudiante de la base de datos.
exports.deleteStudent = async(req, res) => {
    const idStudent = req.params.id;
    try {
        const student = await estudiantesModel.deleteStudent(idStudent);
        if (!student) {
            res.status(404).json({
                success: false,
                msg: `El estudiante con id ${idStudent} no existe`
            })
        }
        res.status(200).json({
            success: true,
            msg: 'Se ha removido un estudiante'
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: 'Hubo un error al obtener los datos',
            error: error
        })
    }
}

// Obtiene los cursos de un estudiante
exports.getStudentsCourses = async(req, res) => {
    const idCourses = req.params.id; // Pedimos la id de los cursos
    try {
        const cursoStudent = await estudiantesModel.getStudentsCourses(idCourses);
        if (!cursoStudent) {
            res.status(404).json({
                success: false,
                msg: 'No se encontraron cursos'
            })
        }
        res.status(200).json({
            success: true,
            cursoStudent
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: 'Hubo un error al obtener los datos',
            error: error
        })
    }
}