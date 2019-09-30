'use strict'
require('./api/models/database');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4200;

app.use(require('./api/routes/indexRouter'));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());





app.listen(process.env.PORT || 4200, (req, res) => console.log(`Se inicio el servidor correctamente, puerto ${port}`));