'use strict';

var mongoose = require('mongoose'),
Beacon = mongoose.model('Beacons');

exports.list_all_beacons = function (req, res) {

    Beacon.find({}, function (err, beacon) { 

        if(err)
            res.send(err);
        res.json(beacon);    
    });
};

exports.upload_beacon_data = function (req, res) {

    var new_beacon = new Beacon(req.body);

    new_beacon.save(function (err, beacon) {

        if(err)
            res.send(error);
        res.json(beacon);    
    })
};