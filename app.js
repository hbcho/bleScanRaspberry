var express = require('express'),
app = express(),
port = process.env.PORT || 3000,
mongoose = require('mongoose'),
Task = require('./models/beacon'),
User = require('./models/user'),
Iteration = require('./models/iteration'),
bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mateuspaduan:44599351Ma@ds159772.mlab.com:59772/botcare');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes/beaconRoutes'); //importing route
routes(app); //register the route

app.listen(port);