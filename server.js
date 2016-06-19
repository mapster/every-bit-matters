var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;
var interval = process.env.TIME_INTERVAL || 10000;

/**
 * IOT-Hub.
 * Connect sensor devices and clients to this hub.
 * Data from sensor devices will be redistributed to all other devices and clients.
 * These clients may choose to use the data based on their custom filters.
 *
 * We recommend the minimum event payload structure to be the following:
 * {
 * 	id: 'some individual identifier for a device',
 * 	type: 'the class of the device, e.g. sensortag',
 * 	sensor: 'the type of the sensor, e.g irTemperature',
 * 	data: someObjectWithSensorData
 * }
 * Add any other fields if necessary.
 *
 * See https://github.com/mehmandarov/sensortag-gettingstarted for an example
 * IOT-Hub-client for the sensortag device.
 */

io.on('connect', function (socket) {
    console.log('New client or sensor connected.');

    socket.on('sensor:data', function (payload) {
      if(payload) {
        io.emit('client:display', payload);
      }
    });
});

// Host a simple web-client example from /client
app.use('/', express.static('client'));
http.listen(port, function () {
    console.log('Running IOT-Hub at http://localhost:' + port)
});
