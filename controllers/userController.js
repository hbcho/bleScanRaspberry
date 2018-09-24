'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('Users');

exports.list_all_users = function (req, res) {

    User.find({}, function (err, user) {

        if (err)
            res.status(500).send(err);
        res.status(200).json(user);
    });
};

exports.upload_user_data = function (req, res) {

    var new_user = new User(req.body);

    new_user.save(function (err, user) {

        if (err)
            res.status(500).send(err);
        res.status(200).json(user);
    })
};