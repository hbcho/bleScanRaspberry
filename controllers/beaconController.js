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

/*const Noble = require("noble");
const BeaconScanner = require("node-beacon-scanner");

var scanner = new BeaconScanner();

scanner.onadvertisement = (advertisement) => {
	var beacon = advertisement["iBeacon"];
	beacon.rssi = advertisement["rssi"];
	console.log(JSON.stringify(beacon, null, "   "));
}

scanner.startScan().then(() => {
	console.log("Scanning has started..");
}).catch(error => {
	console.error(error)
})*/