const express = require('express');
const patch = require('path');
const exphbs = require('express-handlebars');

//Inicializacion
const app = express();

//settings
app.set('port',process.env.PORT || 5000);
app.set('views', patch.join( __dirname + '/views'));


app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: patch.join(app.get('views'), 'layouts'),
    partialsDir: patch.join(app.get('views'), 'partials'),
    extname: '.hbs'
}))
app.set('view engine', '.hbs')

//middlewares
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended:true}));

//routes


module.exports = app;