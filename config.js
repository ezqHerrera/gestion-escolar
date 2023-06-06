// En este archivo se encuentra la conexión a la base de datos.
const config = require('dotenv');
const dbConfig = () => {
    return {
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD
    }
}