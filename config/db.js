const mysql = require('mysql2');
const config = require('../config.js');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'escuela'
})

module.exports = pool.promise();