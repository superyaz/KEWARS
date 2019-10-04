const express = require('express');
const router = express.Router();


router.get('/shopCart', (req, res) => {
    res.send('Carrito de compras');
})

module.exports = router;