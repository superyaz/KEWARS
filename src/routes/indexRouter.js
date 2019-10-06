const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/hombre', (req, res) => {
    res.render('hombre');
});

router.get('/mujer', (req, res) => {
    res.render('mujer');
});
router.get('/login', (req, res) => {
    res.render('users/login');
});

router.get('/register', (req, res) => {
    res.render('users/register');
})

router.get('/board', (req, res) => {
    res.render('board');
})


router.get('/shopCart', (req, res) => {
    res.render('shopCart');
})



module.exports = router;