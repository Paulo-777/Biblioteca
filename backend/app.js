const { TestObject } = require('protractor/built/driverProviders');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require ('mongoose');
const Biblioteca = require('./models/biblioteca')

mongoose.connect('mongodb+srv://Paulo:Ananas1010@cluster0.ijarg.mongodb.net/<Livros>?retryWrites=true&w=majority')
    .then(() => {
    console.log ("Conexão OK")
    }).catch(() => {
    console.log("Conexão NOK")
    });


app.use(bodyParser.json());

const registros = [{
    id: '01',
    titulo: 'teste01',
    autor: 'teste01',
    paginas: 'teste01'
    },
    {
        id: '02',
        titulo: 'teste02',
        autor: 'teste02',
        paginas: 'teste02'

}];

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    next();
});


//http://localhost:3000/api/biblioteca
app.get('/api/biblioteca', (req, res, next) => {
    res.status(200).json({
        mensagem: "Tudo OK",
        registros: registros
    })
})

app.post('/api/biblioteca', (req, res, next) => {
    const registros = new Biblioteca({
        id: req.body.id,
        titulo: req.body.titulo,
        autor: req.body.autor,
        paginas: req.body.paginas
    });
    registros.save();
    console.log(registros);
    res.status(201).json({mensagem: "Livro Registrado"})
})

module.exports = app