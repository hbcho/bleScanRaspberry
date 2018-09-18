'use strict';

var mongoose = require('mongoose'),
    Beacon = mongoose.model('Beacons'),
    User = mongoose.model('Users');

exports.list_all_beacons = function (req, res) {

    Beacon.find({}, function (err, beacon) {

        if (err)
            res.send(err);
        res.json(beacon);
    });
};

exports.upload_beacon_data = function (req, res) {

    User.find({ major: req.body.major, minor: req.body.minor }, function (err, user) {

        if (err) {
            res.send(err);
        }

        if (user.length) {

            Beacon.find({ major: req.body.major, minor: req.body.minor }, function (err, beacon) {

                if (err) {
                    res.send(err);
                }

                if (!beacon.length) {

                    var new_beacon = new Beacon(req.body);

                    new_beacon.save(function (err, beacon) {

                        if (err)
                            res.send(error);
                        res.json(beacon);
                    })
                }

                else {

                    console.log("Update params in database");
                }
            })
        }
    })
};