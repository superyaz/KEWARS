const express = require('express');
const router = express.Router();


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