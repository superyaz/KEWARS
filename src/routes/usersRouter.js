const router = require('express').Router();
const passport = require('passport');

// Models
const User = require('../models/userModels');

router.get('/users/register', (req, res) => {
    res.render('users/register');
});

router.post('/users/register', async (req, res) => {
    let errors = [];
    const { usuario, correo, contrasena, confirmar_contrasena } = req.body;
    if (usuario.length <= 0) {
        errors.push({ text: 'Ingrese nombre de usuario.' });
    }
    if (correo.length <= 0) {
        errors.push({ text: 'Ingrese Correo Electronico.' });
    }
    if (contrasena != confirmar_contrasena) {
        errors.push({ text: 'La contraseña no coincide.' });
    }
    if (contrasena.length < 4) {
        errors.push({ text: 'La contraseña debe contener al menos 4 caracteres.' })
    }
    if (errors.length > 0) {
        res.render('users/register', { errors, usuario, correo, contrasena, confirmar_contrasena });
    } else {
        // Look for email coincidence
        const emailUser = await User.findOne({ correo: correo });
        if (emailUser) {
            req.flash('error_msg', 'Este correo ya existe.');
            res.redirect('/users/register');
        } else {
            // Saving a New User
            const newUser = new User({ usuario, correo, contrasena });
            newUser.contrasena = await newUser.encryptPassword(contrasena);
            await newUser.save();
            req.flash('success_msg', 'Usuario registrado.');
            res.redirect('/users/login');
        }
    }
});

router.get('/users/login', (req, res) => {
    res.render('users/login');
});

router.post('/users/login', passport.authenticate('local', {
    successRedirect: '/board',
    failureRedirect: '/users/login',
    failureFlash: true
}));

router.get('/users/cerrarSesion', (req, res) => {
    req.logout();
    req.flash('success_msg', 'Sesión finalizada.');
    res.redirect('/');
});

module.exports = router;















// const express = require('express');
// const router = express.Router();
// const passport = require('passport');
// const Usuario = require('../models/userModels')


// router.get('/users/register', (req, res) => {
//     res.render('users/register')
// })

// router.post('/users/register', async (req, res) => {
//     let errors = [];
//     const { usuario, correo, contrasena, confirmar_constrasena } = req.body;

//     if (contrasena != confirmar_contrasena) {
//         errors.push({ text: 'Las contraseñas no coinciden' });
//     }
//     if (contrasena.length < 4) {
//         errors.push({ text: 'La contraseña debe contener mas de 4 caracteres' })
//     }
//     if (errors.length > 0) {
//         res.render('user/register', { errors, usuario, correo, contrasena, confirmar_contrasena })
//     } else {
//         const correoUser = await Usuario.findOne({ correo: correo });
//         if (correoUser) {
//             req.flash('error_msg', 'El correo ya esta en uso');
//             res.redirect('/users/register');
//         }
//         const newUser = new Usuario({ usuario, correo, contrasena, confirmar_constrasena });
//         newUser.contrasena = await newUser.encryptPassword(contrasena);
//         await newUser.save();
//         req.flash('success_msg', 'Usuario registrado');
//         res.redirect('/users/login');
//     }
// });


// router.get('/users/login', (req, res) => {
//     res.render('users/login');
// });

// router.post('/users/login', passport.authenticate('local', {
//     successRedirect: '/board',
//     failureRedirect: '/users/login',
//     failureFlash: true
// }));





// module.exports = router;