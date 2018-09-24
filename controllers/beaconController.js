'use strict';

var mongoose = require('mongoose'),
    Beacon = mongoose.model('Beacons'),
    User = mongoose.model('Users'),
    Iteration = mongoose.model('Iterations');

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

        var userIteract = JSON.parse(JSON.stringify(user));

        if (user.length) {

            Iteration.find({ major: req.body.major, minor: req.body.minor }, function (err, iteration) {

                if (err) {
                    res.send(err);
                }

                if (!iteration.length) {

                    var new_iteration = new Iteration({name: user[0].name, major: req.body.major, minor: req.body.minor, txPower: req.body.txPower});

                    new_iteration.save(function (err, iteration) {

                        if (err)
                            res.send(err);
                        res.json(iteration);
                    })
                }

                else {

                    var key = { major: req.body.major, minor: req.body.minor };
                    var updateTxPower = { $push: txPower = req.body.txPower };

                    Iteration.update(key, updateTxPower, function (err, iteration) { 

                        if(err){
                            res.send(err);
                        }

                        res.send(iteration);
                    });
                }
            });
        }
    });
};