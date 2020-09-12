const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
//imortando rutas

const usuariosRutas = require('./rutas/usuarios')

//configuraciones

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'vistas'));


app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'crudCamilo'
}, 'single'))

app.use(express.urlencoded({extended: false}));

//rutas
app.use('/', usuariosRutas);

//archivos publicos

app.use(express.static(path.join(__dirname, 'publico')))


app.listen(app.get('port'), () => {
    console.log('Server on port 3000');
});