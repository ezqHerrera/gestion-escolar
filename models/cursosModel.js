const db = require('../config/db');

// Muestra todos los cursos en la base de datos.
exports.getCourses = async() => {
    const [rows, fields] = await db.execute('SELECT * FROM cursos');
    console.log(rows);
    return rows;
};

/**
 * Muestra un curso específico según su id.
 * En la consulta, el @param id se escribe en la URL,
 * por ejemplo: /api/cursos/1
 */
exports.getCourseById = async(id) => {
    const [rows, fields] = await db.execute('SELECT * FROM cursos WHERE id=?', [id]);
    console.log(rows);
    return rows;
};

/**
 * Agrega un curso a la base de datos.
 * * La consulta deberá ser realizada mediante texto en formato JSON.
 */
exports.addCourse = async(curso) => {
    console.log(curso);
    const [rows, fields] = await db.execute('INSERT INTO cursos (nombre, descripcion) VALUES (?, ?)', [curso.nombre, curso.descripcion]);
    console.log(rows);
    return rows;
};

/**
 * Actualiza un curso existente.
 * * La consulta deberá ser realizada mediante texto en formato JSON.
 * * Todos los parámetros deberán ser ingresados aunque no se vaya a modificar toda la fila.
 * En la consulta, los campos no modificados deberán contener su valor correspondiente al de la base de datos.
 */
exports.updateCourse = async(curso) => {
    console.log(curso);
    const [rows, fields] = await db.execute('UPDATE cursos SET nombre = ?, descripcion = ? WHERE id=?', [curso.nombre, curso.descripcion, curso.id]);
    console.log(rows);
    return rows;
};

/**
 * Elimina un curso de la base de datos.
 * En la consulta, la @param id se escribe en la URL,
 * por ejemplo: /api/cursos/1
 */
exports.deleteCourse = async(id) => {
    const [rows, fields] = await db.execute('DELETE FROM cursos WHERE id=?', [id]);
    console.log(rows);
    return rows;
};

/**
 * Agrega un estudiante a un curso.
 * El id del curso debe coincidir en la URL de la consulta,
 * por ejemplo: /api/cursos/1/estudiantes/
 * donde 1 = @param idCurso
 */
exports.addStudentToCourse = async(numero) => {
    console.log(numero);
    const [rows, fields] = await db.execute('INSERT INTO estudiantes_cursos (idEstudiante, idCurso) VALUES (?, ?)', [numero.idEstudiante, numero.idCurso]);
    console.log(rows);
    return rows;
};

/**
 * Obtiene los estudiantes de un curso.
 * El id del curso debe coincidir en la URL de la consulta,
 * por ejemplo: /api/cursos/1/estudiantes
 * donde 1 = @param idCurso
 */
exports.getCoursesStudents = async(idCurso) => {
    const [rows, fields] = await db.execute('SELECT * FROM estudiantes_cursos WHERE idCurso=?', [idCurso]);
    console.log(rows);
    return rows;
};

// TODO data is undefined???
exports.deleteStudentFromCourse = async(ides) => {
    const [rows, fields] = await db.execute('DELETE FROM estudiantes_cursos WHERE idCurso=? AND idEstudiante=?', [ides.idCurso, ides.idEstudiante]);
    console.log(rows);
    return rows;
};