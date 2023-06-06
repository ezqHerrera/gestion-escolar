const db = require('../config/db');

// Función que muestra los estudiantes en la base de datos.
exports.getStudents = async() => {
    const [rows, fields] = await db.execute('SELECT * FROM estudiantes');
    console.log(rows);
    return rows;
};

/**
 * Muestra un estudiante específico según su id.
 * En la consulta, el @param id se escribe en la URL,
 * por ejemplo: /api/estudiantes/1
 */
exports.getStudentById = async(id) => {
    const [rows, fields] = await db.execute('SELECT * FROM estudiantes WHERE id=?', [id]);
    console.log(rows);
    return rows;
};

/**
 * Añade un estudiante a la base de datos.
 * * La consulta deberá ser realizada mediante texto en formato JSON.
 */
exports.addStudent = async(student) => {
    console.log(student);
    const [rows, fields] = await db.execute('INSERT INTO estudiantes (nombre, edad, grado) VALUES (?, ?, ?)', [student.nombre, student.edad, student.grado]);
    console.log(rows);
    return rows;
};

/**
 * Actualiza los datos de un estudiante en la base de datos
 * * La consulta deberá ser realizada mediante texto en formato JSON.
 * * Todos los parámetros deberán ser ingresados aunque no se vaya a modificar toda la fila.
 * En la consulta, los campos no modificados deberán contener su valor correspondiente al de la base de datos.
 */
exports.updateStudent  = async(student) => {
    console.log(student);
    const [rows, fields] = await db.execute('UPDATE estudiantes SET nombre = ?, edad = ?, grado = ? WHERE id=?', [student.nombre, student.edad, student.grado, student.id]);
    console.log(rows);
    return rows;
};

/**
 * Remueve un estudiante de la base de datos
 * En la consulta, el @param id se escribe en la URL,
 * por ejemplo: /api/estudiantes/1
 */
exports.deleteStudent = async(id) => {
    const [rows, fields] = await db.execute('DELETE FROM estudiantes WHERE id=?', [id]);
    console.log(rows);
    return rows;
};

/**
 * Obtiene los cursos de un estudiante.
 * El id del estudiante debe coincidir en la URL de la consulta,
 * por ejemplo: /api/estudiantes/1/cursos
 * donde 1 = @param idEstudiante
 */
exports.getStudentsCourses = async(idEstudiante) => {
    const [rows, fields] = await db.execute('SELECT * FROM estudiantes_cursos WHERE idEstudiante=?', [idEstudiante]);
    console.log(rows);
    return rows;
}