const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = require('../models/userModels');


passport.use(new LocalStrategy({
    usernameField: 'correo',
    passwordField: 'contrasena',
}, async (correo, contrasena, done) => {

    const user = await User.findOne({ correo: correo });
    if (!user) {
        return done(null, false, { message: 'correo no encontrado.' });
    } else {

        const match = await user.matchPassword(contrasena);
        if (match) {
            return done(null, user);
        } else {
            return done(null, false, { message: 'contrasena incorrecta.' });
        }
    }

}));


passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});




