const mongoose = require('mongoose');


Schema = mongoose.Schema;

var UsuarioSchema = new Schema({
    nombre: { type: String, require: true },
    apellido: { type: String, require: true },
    correo: { type: String, require: true },
    usuario: { type: String, require: true },
    contraseña: { type: String, require: true },
    create_at: { type: Date, default: Date.now }
})



module.exports = mongoose.model('Usuario', UsuarioSchema);