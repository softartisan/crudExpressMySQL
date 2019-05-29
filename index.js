const usuarioRouter = require('./routers/usuarioRouter');
const express = require('express');
const path = require('path');
const hbs = require('hbs');


const app = express();

app.use(express.json());       
app.use(express.urlencoded());

const viewsPath = path.join(__dirname,'./views');
const partialsPath = path.join(__dirname, './views/partials/');

//Configuro el view engine a hbs y agrego el path a las view
app.set('view engine','hbs'); 
app.set('views',viewsPath);
hbs.registerPartials(partialsPath);


app.use('/usuario',usuarioRouter);


app.listen(5500);