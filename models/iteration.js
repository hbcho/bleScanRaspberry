'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var IterationSchema = new Schema({
    
    name: {
        type: String
    },  
    major: {
        type: String
    },    
    minor:{
        type: String
    },
    txPower:{
        type: String
    }
});

module.exports = mongoose.model('Iterations', IterationSchema);