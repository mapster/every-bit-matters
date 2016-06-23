var express = require('express');
var app = express();
var http = require('http').Server(app);
var socket = require('socket.io')(http);
var port = process.env.PORT || 3000;
var interval = process.env.TIME_INTERVAL || 10000;

// Host a simple web-client example from /client
app.use('/', express.static('client'));
http.listen(port, function () {
    console.log('Running IOT-Hub at http://localhost:' + port)
});
