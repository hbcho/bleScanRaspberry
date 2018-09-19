'use strict';
module.exports = function (app) {
    var beaconController = require('../controllers/beaconController');
    var userController = require('../controllers/userController');
    var iterationController = require('../controllers/iterationController');

    app.route('/beacons')
        .get(beaconController.list_all_beacons)
        .post(beaconController.upload_beacon_data);

    app.route('/users')
        .get(userController.list_all_users)
        .post(userController.upload_user_data);

    app.route('/iterations')
        .get(iterationController.list_all_iterations);    
}