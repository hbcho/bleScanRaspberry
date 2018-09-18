const Noble = require("noble");
const BeaconScanner = require("node-beacon-scanner");

var request = require('request');

var scanner = new BeaconScanner();

var jsonResult;

function scanController(){

	scanner.startScan().then(() => {
		console.log("Scanning has started..");
	}).catch(error => {
		console.error(error)
	})

	scanner.stopScan();
}

setInterval(scanController, 1000);

scanner.onadvertisement = (advertisement) => {
	
	var beacon = advertisement["iBeacon"];
	var rssi = advertisement["rssi"];
	
	jsonResult = beacon;

	if(jsonResult != "undefined") {
		
		request.post({
		
			url: 'https://botcare.herokuapp.com/beacons',
			json: jsonResult
		},
	
		function (err, httpResponse, body){
			console.log(body);
		});
	}			
}
