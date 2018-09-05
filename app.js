const Noble = require("noble");
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
})