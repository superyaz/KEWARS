const environment = process.env.NODE_ENV || "dev";
const config = require('../config/database.json')[environment];
const mongoose = require('mongoose');

mongoose.connect(...config)
    .then(() => console.log('Database is connect'))
    .catch((err) => console.log(err + 'Error al conectar la base de datos'))