const mongoose = require('mongoose');
const { ModuleResolutionKind } = require('typescript');

const bibliotecaSchema = mongoose.Schema({
    id : {
        type: String,
        required: true
    },

    titulo : {
        type: String,
        required: true
    },
    
    autor: {
        type: String,
        required: true
    },

    paginas:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model ('Biblioteca', bibliotecaSchema)