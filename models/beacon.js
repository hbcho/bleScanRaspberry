'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BeaconSchema = new Schema({
    
    uuid: {
        type: String
    },
    major: {
        type: String
    },  
    minor: {
        type: String
    },    
    txPower:{
        type: String
    }
});

module.exports = mongoose.model('Beacons', BeaconSchema);