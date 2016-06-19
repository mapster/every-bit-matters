var socket = io();

/**
 * Simple example IOT-Hub client.
 * It records irTemperature readings from sensortag in a table.
 *
 * See https://github.com/mehmandarov/sensortag-gettingstarted for an example
 * IOT-Hub-client for the sensortag device.
 */

socket.on('connect', function (data) {
    console.log("Client connected to IOT-Hub.");
});

socket.on('client:display', function (payload) {
  var tbody = document.getElementsByTagName('tbody')[0];

  if(payload.type == 'sensortag' && payload.sensor == 'irTemperature') {
    // add table row
    var tr = document.createElement('tr');
    // add columns
    var device = document.createElement('td');
    var object = document.createElement('td');
    var ambient = document.createElement('td');
    // add content to columns
    device.textContent = payload.id;
    object.textContent = payload.data.objectTemp;
    ambient.textContent = payload.data.ambientTemp;
    // append columns to row
    tr.appendChild(device);
    tr.appendChild(object);
    tr.appendChild(ambient);
    // append row to tbody
    tbody.appendChild(tr);
  }
});
