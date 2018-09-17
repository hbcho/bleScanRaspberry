'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BeaconSchema = new Schema({
    
    UUID: {
        type: String
    },
    major: {
        type: String
    },  
    minor: {
        type: String
    },    
    rssi:{
        type: String
    }
});

module.exports = mongoose.model('Beacons', BeaconSchema);