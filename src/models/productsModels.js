const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var productoSchema = new Schema({
    imagenPath: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    talla: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    cantidad: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    fecha: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Producto', productoSchema);