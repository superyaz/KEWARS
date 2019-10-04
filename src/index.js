require('./config/database.json');
require('./models/database');
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');
const port = 3000;
//Initializations
const app = express();


//Setting
app.set('port', process.env.PORT || 3000);


//views
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
}));

app.set('view engine', '.hbs')

//Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'claveSecreta',
    resave: true,
    saveUninitialized: true
}))


//Global Variables



//Routes

app.use(require('./routes/indexRouter'));
app.use(require('./routes/usersRouter'));
app.use(require('./routes/productsRouter'));
app.use(require('./routes/shopCart'));

//Static Files

app.use(express.static(path.join(__dirname, 'public')));

//Server is Listenning
app.listen(app.get('port'), () => { console.log(`Server on port ${port}`); })