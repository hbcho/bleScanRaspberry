'use strict';
module.exports = function (app) {
    var beaconController = require('../controllers/beaconController');

    app.route('/beacons')
        .get(beaconController.list_all_beacons)
        .post(beaconController.upload_beacon_data);
}