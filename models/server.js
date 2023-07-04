const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

class Server {
    constructor(){
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(morgan());
    }

    routes(){
        this.app.use('/api/cursos/', require('../routes/cursos'));
        this.app.use('/api/estudiantes/', require('../routes/estudiantes'));
        this.app.use('/api/profesores/', require('../routes/profesores'));
    }

    listen(){
        this.app.listen(3000, () => {
            console.log('Servidor activo en el puerto 3000.');
        })
    }
}

module.exports = Server;