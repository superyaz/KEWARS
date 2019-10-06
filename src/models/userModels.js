const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const bcrypt = require('bcrypt')

var UsuarioSchema = new Schema({
    usuario: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    estado: {
        type: Boolean,
        default: true
    },
    contrasena: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

UsuarioSchema.methods.encryptPassword = async (contrasena) => {
    const salt = await bcrypt.genSalt(10);
    const hash = bcrypt.hash(contrasena, salt);
    return hash;
};

UsuarioSchema.methods.matchPassword = async function (contrasena) {
    return await bcrypt.compare(contrasena, this.contrasena)
}


module.exports = mongoose.model('User', UsuarioSchema);
