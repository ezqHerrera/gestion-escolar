const db = require('../config/db');

// Función que muestra los profesores en la base de datos.
exports.getProfessors = async() => {
    const [rows, fields] = await db.execute('SELECT * FROM profesores');
    console.log(rows);
    return rows;
};

/**
 * Muestra un profesor específico según su id.
 * En la consulta, el @param id se escribe en la URL,
 * por ejemplo: /api/profesores/1
 */
exports.getProfessorById = async(id) => {
    const [rows, fields] = await db.execute('SELECT * FROM profesores WHERE id=?', [id]);
    console.log(rows);
    return rows;
};

/**
 * Añade un profesor a la base de datos.
 * * La consulta deberá ser realizada mediante texto en formato JSON.
 */
exports.addProfessor = async(profesor) => {
    console.log(profesor);
    const [rows, fields] = await db.execute('INSERT INTO profesores (nombre, especialidad, email) VALUES (?, ?, ?)', [profesor.nombre, profesor.especialidad, profesor.email]);
    console.log(rows);
    return rows;
};

/**
 * Actualiza los datos de un profesor en la base de datos
 * * La consulta deberá ser realizada mediante texto en formato JSON.
 * * Todos los parámetros deberán ser ingresados aunque no se vaya a modificar toda la fila.
 * En la consulta, los campos no modificados deberán contener su valor correspondiente al de la base de datos.
 */
exports.updateProfessor = async(profesor) => {
    const [rows, fields] = await db.execute('UPDATE profesores SET nombre = ?, especialidad = ?, email = ? WHERE id=?', [profesor.nombre, profesor.especialidad, profesor.email, profesor.id]);
    console.log(rows);
    return rows;
};

/**
 * Remueve un profesor de la base de datos
 * En la consulta, el @param id se escribe en la URL,
 * por ejemplo: /api/profesores/1
 */
exports.deleteProfessor = async(id) => {
    const [rows, fields] = await db.execute('DELETE FROM profesores WHERE id=?', [id]);
    console.log(rows);
    return rows;
};