const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema({
    email : String,
    senha : {
        type : String,
        required : true,
    },
    nome : String,
    cargo : String,
},{timestamps : true});

mongoose.model('Usuario',UsuarioSchema);