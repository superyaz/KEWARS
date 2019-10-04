const environment = process.env.NODE_ENV || "dev";
const config = require('../config/database.json')[environment];
const mongoose = require('mongoose');


mongoose.connect(...config)
    .then(() => console.log('La base de datos esta conectada'))
    .catch(() => console.log('Error al conectar la base de datos'));