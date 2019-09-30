const { Router } = require('express');
const usuarioController = require('../controller/usuarioController');

const router = Router();

router.get('/usuario', usuarioController.index);
router.post('/usuario', usuarioController.guardar);
router.get('/usuario/:id', usuarioController.ver);
router.put('/usuario/:id', usuarioController.modificar);
router.delete('/usuario/:id', usuarioController.eliminar);







module.exports = router;
