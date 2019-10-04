const express = require('express');
const router = express.Router();


router.get('/products', (req, res) => {
    res.send('ruta de productos');
})

module.exports = router;