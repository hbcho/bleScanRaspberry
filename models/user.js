'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    
    name: {
        type: String
    },
    cpf: {
        type: String
    },  
    major: {
        type: String
    },    
    minor:{
        type: String
    }
});

module.exports = mongoose.model('Users', UserSchema);