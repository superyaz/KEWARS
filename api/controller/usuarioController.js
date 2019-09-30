var Usuario = require('./../models/usuarioModels');
const bcrypt = require('bcrypt');

let index = (req, res) => {

}

let guardar = (req, res) => {
    let usuario = new Usuario({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        correo: req.body.correo,
        usuario: req.body.usuario,
        contraseña: bcrypt.hashSync(req.body.contraseña, 10)
    });
    usuario.save((err, usuarioNew) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err
            });
        }
        return res.status(200).json({
            ok: true,
            usuario: usuarioNew
        });
    });
}

let ver = (req, res) => {

}

let modificar = (req, res) => {

}

let eliminar = (req, res) => {

}

module.exports = {
    index,
    guardar,
    ver,
    modificar,
    eliminar
}