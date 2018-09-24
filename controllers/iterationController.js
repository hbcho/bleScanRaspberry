'use strict';

var mongoose = require('mongoose'),
    Iteration = mongoose.model('Iterations');

exports.list_all_iterations = function (req, res) {

    Iteration.find({}, function (err, iteration) {

        if (err)
            res.status(500).send(err);
        res.status(200).json(iteration);
    });
};