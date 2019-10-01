const express = require('express');

const app = express();

app.get('/', (req, res) => res.redirect("./productoRoutes"));

app.use("/api", require("./usuarioRoutes"));


module.exports = app;



