const express = require('express');
const router = express.Router();
require('../models/productsModels');

const { isAuthenticated } = require('../helpers/auth');

router.get('/board', isAuthenticated, (req, res) => {
    res.render('board');
})




router.post('/board', isAuthenticated, (req, res) => {

});

module.exports = router;