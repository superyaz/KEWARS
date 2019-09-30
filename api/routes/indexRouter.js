const express = require('express');

const app = express();

app.get('/', (req, res) => res.redirect('./productoRouter.js'));

app.use('/api', require('./usuarioRouter'));


module.exports = app;



