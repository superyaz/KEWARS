const express = require('express');
const router = express.Router();


router.get('/users/signin', (req, res) => {
    res.send('Ingresando a la app');
});

router.get('/users/signup', (req, res) => {
    res.send('Formulario autenticación')
})


module.exports = router;