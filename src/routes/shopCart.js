const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../helpers/auth');

router.get('/shopCart', isAuthenticated, (req, res) => {
    res.render('shopCart');
})

module.exports = router;