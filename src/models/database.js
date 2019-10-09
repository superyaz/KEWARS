// const environment = process.env.NODE_ENV || "dev";
// const config = require('../config/database.json')[environment];
// const mongoose = require('mongoose');


// mongoose.connect(...config)
//     .then(() => console.log('La base de datos esta conectada'))
//     .catch(() => console.log('Error al conectar la base de datos'));

const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb+srv://yacamo:yaz.456@cluster0-5xtyo.mongodb.net/kewars?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));