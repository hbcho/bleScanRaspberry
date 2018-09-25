'use strict';

var mongoose = require('mongoose'),
    Beacon = mongoose.model('Beacons'),
    User = mongoose.model('Users'),
    Iteration = mongoose.model('Iterations');

exports.list_all_beacons = function (req, res) {

    Beacon.find({}, function (err, beacon) {

        if (err)
            res.status(500).send(err);
            
        res.status(200).json(beacon);
    });
};

exports.upload_beacon_data = function (req, res) {

    User.find({ major: req.body.major, minor: req.body.minor }, function (err, user) {

        if (err) 
            res.status(500).send(err);
        

        if (user.length) {

            Iteration.find({ major: req.body.major, minor: req.body.minor }, function (err, iteration) {

                if (err) {
                    res.status(500).send(err);
                }

                if (!iteration.length) {

                    var new_iteration = new Iteration({name: user[0].name, major: req.body.major, minor: req.body.minor, txPower: req.body.txPower});

                    new_iteration.save(function (err, iteration) {

                        if (err)
                            res.status(500).send(err);

                        res.status(200).json(iteration);
                    })
                }

                else {

                    var key = { major: req.body.major, minor: req.body.minor };
                    var update = { $set: { txPower: req.body.txPower } };

                    Iteration.update(key, update, function (err, iteration) { 

                        if(err)
                            return res.status(500).send(err);
                        
                        return res.status(200).send(iteration);
                    });
                }
            });
        }

        else {

            res.status(500).send("Não há usuários cadastrados com esse beacon ID.");
        }
    });
};