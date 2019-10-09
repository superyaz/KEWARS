const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../helpers/auth');

router.get('/shopCart', isAuthenticated, (req, res) => {
    res.render('shopCart');
})

router.get('/mantenimiento'), isAuthenticated, (req, res) => {
    res.render('mantenimiento');
}
module.exports = router;